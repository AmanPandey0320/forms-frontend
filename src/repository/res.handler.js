import Cookie from 'universal-cookie';
import dotenv from 'dotenv';
const axios = require('axios');
dotenv.config();
let baseUrl = 'http://localhost:5600';
// baseUrl = process.env.REACT_APP_server_url
const cookie = new Cookie();

const config = {
    headers: {
        'Content-Type' : 'application/json',
        Authorization: `Bearer forms_jwt_cookie`
    },
    withCredentials: true
}

export const submitResponse = async(data,cb)=>{
    
    const authKey = cookie.get('forms_auth_key');
    const resData = {authKey,data};

    axios.post(baseUrl+'/api/response/submit',JSON.stringify(resData),config).then(respose=>{

        return cb(null,respose.data);

    }).catch(err=>{
        console.log(err);
        return cb(err);
    });

}