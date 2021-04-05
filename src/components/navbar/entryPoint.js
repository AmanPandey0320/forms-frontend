import {Button} from 'react-bootstrap';
import { GoogleLogin } from 'react-google-login';
import {FcGoogle} from 'react-icons/fc';
import {Link} from 'react-router-dom';
import dotenv from 'dotenv';
dotenv.config();

const clientId = process.env.REACT_APP_google_client_id;
const responseGoogle = (responce) => {
    const token = responce.googleId;
    console.log(token);
    //TODO: call the api to sign in for google token   
}

const EntryBtn = () => {
    return ( 
        <div>
            <GoogleLogin
                clientId={clientId}
                render={renderProps => (
                    <Button onClick={renderProps.onClick} variant="light"><span className="pt-1">Continue with <FcGoogle/>oogle</span></Button>
                    )}
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
            />
        </div>
     );
}

export default EntryBtn;