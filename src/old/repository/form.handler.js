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
    const auth_token = cookie.get('forms_auth_key');
    data.auth_token = auth_token;
    axios.post(baseUrl+'/api/form/create',JSON.stringify(data),config).then(response=>{
        return callback(null,response);
    }).catch(err=>{
        return callback(err);
    })
}
export const readAllForm = async (callback)=>{

    const auth_token = cookie.get('forms_auth_key');
    const data = {auth_token};

    axios.post(baseUrl+'/api/form/getall',JSON.stringify(data),config).then(res=>{
        const resdata =  res.data;
        // console.log(resdata);
        return callback(null,resdata);
    }).catch(err=>{
        return callback(err);
    })

}

export const readOne = async (form_id,cb)=>{

    const auth_token = cookie.get('forms_auth_key');
    const data = {auth_token,form_id};

    axios.post(baseUrl+'/api/form/getone',JSON.stringify(data),config).then(res=>{
        
        return cb(null,res.data);

    }).catch(err=>{
        return cb(err);
    })

}

export const editOne = async (form_id,data,title,description,cb) => {
    const authKey = cookie.get('forms_auth_key');
    const newdata = {authKey,data,form_id,title,description};

    axios.post(baseUrl+'/api/form/editform',JSON.stringify(newdata),config).then(res=>{

        return cb(null,res);

    }).catch(err=>{
        return cb(err);
    });
}