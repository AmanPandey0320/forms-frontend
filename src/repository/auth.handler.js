import Cookie from 'universal-cookie';
import dotenv from 'dotenv';
const axios = require('axios');
dotenv.config();
let baseUrl = 'http://localhost:5600';
// baseUrl = process.env.REACT_APP_server_url
const cookie = new Cookie();

console.log(baseUrl);

export const signupAPI = (data,callback) => {
    
    axios({
        method: 'post',
        url: baseUrl + '/api/auth/signup',
        data: data
    }).then((response) =>{
        cookie.set('forms_auth_key',response.data.token,{
            maxAge:2*60*60*1000,
            path:'/'
        });
        return callback(null);
    }).catch((err) =>{
        console.log(err);
        return callback(err);
    });
}
export const signinAPI = (data,callback) => {
    const key = cookie.get('forms_auth_key');
    data.authKey = key;
    // console.log(data);
    const config = {
        headers: {
            'Content-Type' : 'application/json',
            Authorization: `Bearer forms_jwt_cookie`
        },
        withCredentials: true
    }
    axios.post(baseUrl + '/api/auth/signin',JSON.stringify(data),config).then(response=>{
        cookie.set('forms_auth_key',response.data.token,{
            maxAge:2*60*60*1000,
            path:'/'
        });
        return callback(null,response.data);
    }).catch((err) =>{
        console.log(err);
        return callback(err);
    })
}

export const verifyUser = (callback) =>{
    const authKey = cookie.get('forms_auth_key');
    const config = {
        headers: {
            'Content-Type' : 'application/json',
            Authorization: `Bearer forms_jwt_cookie`
        },
        withCredentials: true
    }
    const data = {authKey};
    console.log(authKey);
    axios.post(baseUrl + '/api/auth/verify',JSON.stringify(data),config).then(response=>{

        // console.log(response.data.verify_response.token);
        cookie.set('forms_auth_key',response.data.verify_response.token,{
            maxAge:2*60*60*1000,
            path:'/'
        });
        return callback(null,response.data);

    }).catch(err=>{

        console.log(err);
        return callback(err);

    });
}