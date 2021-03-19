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

export const createForm = async (data,callback)=>{
    const authKey = cookie.get('forms_auth_key');
    data.authKey = authKey;
    axios.post(baseUrl+'/api/form/create',JSON.stringify(data),config).then(response=>{
        return callback(null,response);
    }).catch(err=>{
        return callback(err);
    })
}
export const readAllForm = async (callback)=>{

    const authKey = cookie.get('forms_auth_key');
    const data = {authKey};

    axios.post(baseUrl+'/api/form/getall',JSON.stringify(data),config).then(res=>{
        const resdata =  res.data;
        return callback(null,resdata);
    }).catch(err=>{
        return callback(err);
    })

}

export const readOne = async (form_id,cb)=>{

    const authKey = cookie.get('forms_auth_key');
    const data = {authKey,form_id};

    axios.post(baseUrl+'/api/form/getone',JSON.stringify(data),config).then(res=>{
        
        return cb(null,res.data);

    }).catch(err=>{
        return cb(err);
    })

}