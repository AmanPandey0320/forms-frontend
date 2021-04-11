import Cookie from 'universal-cookie';
import dotenv from 'dotenv';
const axios = require('axios');
dotenv.config();
let baseUrl = 'http://localhost:5600';
// baseUrl = process.env.REACT_APP_server_url
const cookie = new Cookie();

console.log(baseUrl);

export const logoutAPI = async (cb) => {

    try{

        await cookie.remove('forms_auth_key');
        return cb(null,{code:200,message:'logged out',path:'/home'});


    }catch(err){

        console.log(err);
        return cb(err);

    }

}

export const signupAPI = (data,callback) => {
    
    axios({
        method: 'post',
        url: baseUrl + '/api/auth/signup',
        data: data
    }).then((response) =>{
        
        cookie.set('forms_auth_key',response.data.auth_token,{
            maxAge:2*60*60*1000,
            path:'/'
        });
        const auth_token = cookie.get('forms_auth_key');
        console.log(auth_token);
        return callback(null);
    }).catch((err) =>{
        console.log(err);
        return callback(err);
    });
}

export const verifyUser = (callback) =>{
    const auth_token = cookie.get('forms_auth_key');
    const config = {
        headers: {
            'Content-Type' : 'application/json',
            Authorization: `Bearer forms_jwt_cookie`
        },
        withCredentials: true
    }
    if(auth_token === null  || auth_token === undefined){
        return callback({
            code:401,
            message:'no auth key fund',
            path:'/signup'
        });
    }
    const data = {auth_token};
    // console.log(auth_token);
    axios.post(baseUrl + '/api/auth/verify',JSON.stringify(data),config).then(response=>{

        // console.log(response.data.verify_response.token);
        // console.log(response.data.auth_token);
        cookie.set('forms_auth_key',response.data.auth_token,{
            maxAge:2*60*60*1000,
            path:'/'
        });
        response.data.status = 200;
        return callback(null,response.data);

    }).catch(err=>{

        console.log(err);
        return callback(err);

    });
}