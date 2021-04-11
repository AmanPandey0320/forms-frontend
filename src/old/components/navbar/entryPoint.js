import { GoogleLogin } from 'react-google-login';
import {Link} from 'react-router-dom';
import dotenv from 'dotenv';
import GoogleBtn from './styles';
import {SiGoogle} from 'react-icons/si'
import {signupAPI} from '../../old/repository/auth.handler'
dotenv.config();

const clientId = process.env.REACT_APP_google_client_id;
const responseGoogle = (responce) => {
    const google_token = responce.googleId;
    const name = responce.profileObj.name;
    const data = {google_token,name};
    console.log(data);
    //TODO: call the api to sign in for google token
    signupAPI(data,(err)=>{
        if(err){
            alert(err.message);
        }else{
            window.location.reload();
        }
    });

}

const EntryBtn = () => {
    return ( 
        <div>
            <GoogleLogin
                clientId={clientId}
                render={renderProps => (
                    
                    <GoogleBtn onClick={renderProps.onClick}>
                        <SiGoogle size="1.5em"/>
                    </GoogleBtn>
                    
                    // <Button onClick={renderProps.onClick} variant="light"><span className="pt-1">Continue with <FcGoogle/>oogle</span></Button>
                    )}
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
            />
        </div>
     );
}

export default EntryBtn;