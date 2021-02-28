import './signupin.css';
import {FormControl,Button,InputGroup,Spinner ,Form} from 'react-bootstrap';
import NavBar from '../navbar/navbar';
import {SiMailDotRu} from 'react-icons/si';
import {useState,useEffect} from 'react';
import {RiLockPasswordLine} from 'react-icons/ri';
import {FcGoogle} from 'react-icons/fc';
import { Link } from "react-router-dom";
import { GoogleLogin } from 'react-google-login';


const SignInCard = () => {

    const [passwordSmall,setPasswordSmall] = useState('');
    const [emailSmall,setEmailSmall] = useState("We will never share this with anyone.");
    const [activeState,serActiveState] = useState(true);

    const responseGoogle = (responce) => {
        const token = responce.accessToken;
        console.log(token);
    }

    const signupHandler = () => {
        serActiveState(false);
        alert('Signup')
    }

    return ( 
        <>
        <div className="my-sign-up-in-card">
            <NavBar BrandName="Forms" pageName="enter" />
            <p className="text-primary mt-2 mr-2" style={{textAlign:"right",textDecoration:"none",fontWeight:"500"}}><Link to="/signup">New here? Sign up</Link></p>
            <h4 className="mt-4" style={{textAlign: 'center'}}>Sign In</h4>
            <div className="mx-3">
                <form className="w3-container">
                    <label className="w3-text-blue"><span style={{fontFamily:"Old Standard TT",fontWeight:"500"}}>Email address</span></label>
                    <InputGroup>
                        <InputGroup.Prepend>
                        <InputGroup.Text><SiMailDotRu color="black"/></InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl id="signup-email-txt" placeholder="Enter your email address" />
                    </InputGroup>
                    <small  className="text-muted">We wi'll never share this with anyone.</small>
                </form>

                <form className="w3-container">
                    <label className="w3-text-blue"><span style={{fontFamily:"Old Standard TT",fontWeight:"500"}}>Password</span></label>
                    <InputGroup>
                        <InputGroup.Prepend>
                        <InputGroup.Text><RiLockPasswordLine color="black"/></InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl id="signup-password-txt" placeholder="Enter your password" />
                    </InputGroup>
                    <small className="text-muted">{passwordSmall}</small>
                </form>

                <p style={{textAlign:"center",marginTop:"8px"}}>
                    {activeState && <Button variant="outline-primary" onClick={signupHandler} active> Sign-in</Button>}
                    {!activeState && <Button variant="primary" disabled>Please wait ...&nbsp;<Spinner animation="grow" size="sm" variant="light"/></Button>}
                </p>


                <p style={{textAlign:"center"}}>-&nbsp;OR&nbsp;-</p>

                <p style={{textAlign:"center"}}>
                    <GoogleLogin
                    clientId="465185534423-al90tb9d5eot840g7b8gvt9g8lmck9i2.apps.googleusercontent.com"
                    render={renderProps => (
                        <Button onClick={renderProps.onClick} disabled={renderProps.disabled} variant="light"><span className="pt-1">Continue with <FcGoogle/>oogle</span></Button>
                      )}
                      onSuccess={responseGoogle}
                      onFailure={responseGoogle}
                      cookiePolicy={'single_host_origin'}
                    />
                </p>


            </div>
            <div className="mt-4" style={{textAlign:"center"}}>
                <img src="/assets/logo.svg"
                height = "64"
                width="64"/>
                <h6>All copyrights reserved @ Forms</h6>
            </div>
        </div>
        </>
    );
}
 
export default SignInCard;