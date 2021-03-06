import Cookie from 'universal-cookie';
const axios = require('axios');
const baseUrl = 'http://localhost:5600';
const cookie = new Cookie();

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
        return callback(null,response.data)
    }).catch((err) =>{
        return callback(err);
    });
}
export const signinAPI = (data,callback) => {
    const key = cookie.get('forms_auth_key');
    data.authKey = key;
    console.log(data);
    const config = {
        headers: {
            'Content-Type' : 'application/json',
            Authorization: `Bearer forms_jwt_cookie`
        },
        withCredentials: true
    }
    axios.post(baseUrl + '/api/auth/signin',JSON.stringify(data),config).then(response=>{
        return callback(null,response);
    }).catch((err) =>{
        return callback(err);
    })
}