import { postToBackend } from "./repository";
import Cookie from 'universal-cookie';
import userReducer from '../Reducers/userReducer';
import { createStore } from 'redux';

const cookie = new Cookie();
const store = createStore(userReducer);

export const successGoogle = (responce) => {
    const google_token = responce.googleId;
    const name = responce.profileObj.name;
    const data = {google_token,name};
    // console.log(data);

    const config = {
        headers: {
            'Content-Type' : 'application/json',
            Authorization: `Bearer forms_jwt_cookie`
        },
        withCredentials: true
    }
    const endpoint = '/api/auth/signup'
    //TODO: call the api to sign in for google token
    postToBackend({endpoint,data,config},(err,info)=>{
        if(err){
            alert(err.message);
        }else{
            // alert('success');
            // console.log(info.auth_token);
            cookie.set('forms_auth_key',info.auth_token,{
                maxAge:2*60*60*1000,
                path:'/'
            });
            cookie.set('forms_user_name',data.name,{
                maxAge:2*60*60*1000,
                path:'/'
            });
            window.location.reload();
        }

    });

}

export const verifyGoogle = async ()=>{

    return new Promise((resolve,reject) => {
        const auth_token = cookie.get('forms_auth_key');
        const userName =  cookie.get('forms_user_name');

        const config = {
            headers: {
                'Content-Type' : 'application/json',
                Authorization: `Bearer forms_jwt_cookie`
            },
            withCredentials: true
        }
        const endpoint = `/api/auth/verify`;

        const data = {
            auth_token
        }
        
        postToBackend({endpoint,data,config},(err,info) => {
            if(err){
                alert(err.message);
                return resolve(false)
            }else{
                cookie.set('forms_auth_key',info.auth_token,{
                    maxAge:2*60*60*1000,
                    path:'/'
                });

                // console.log(info);

                store.dispatch({type:'USER_LOGIN',token:info.auth_token,name:userName});
                return resolve(true);
            }
        });
    })

}

export const failureGoogle = (response)=>{
    console.log(response);
}

