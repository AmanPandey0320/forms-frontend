import './signupin.css';
import dotenv from 'dotenv';
import {FormControl,Button,InputGroup,Spinner ,Form} from 'react-bootstrap';
import NavBar from '../navbar/navbar';
import {SiMailDotRu} from 'react-icons/si';
import {useState,useEffect} from 'react';
import {RiLockPasswordLine} from 'react-icons/ri';
import {FcGoogle} from 'react-icons/fc';
import { Link,useHistory } from "react-router-dom";
import { GoogleLogin } from 'react-google-login';
import {signupAPI,signinAPI} from '../../repository/auth.handler';

dotenv.config();


const SignInCard = () => {

    const history = useHistory();
    const [passwordSmall,setPasswordSmall] = useState({
        text:' ',
        color:'text-primary'
    });
    const [email,setEmail]=useState(' ');
    const [password,setPassword]=useState(' ');
    const [emailSmall,setEmailSmall] = useState({
        text:"We will never share this with anyone.",
        color:'text-muted'
    });
    const [activeState,setActiveState] = useState(true);
    const clientId = process.env.REACT_APP_google_client_id;


    const responseGoogle = (responce) => {
        const token = responce.accessToken;
        console.log(token);
        //TODO: call the api to sign in for google token   
    }

    const passwordHandler = (event)=>{
        const value = event.target.value;
        if(value.length < 8)
        setPasswordSmall({text:"password should have at least 8 characters!",color:'text-danger'});
        if(value.length >= 8){
            setPasswordSmall({text:" ",color:'text-primary'});
            setPassword(value)
        }
    }

    const emailHandler = (event)=>{
        const value = event.target.value;

        if(value.split('@').length != 2 || value.split('.').length < 2){
            setEmailSmall({
                text:"Email is wrongly fromatted!",
                color:'text-danger'
            });
        }else{
            setEmailSmall({
                text:"We will never share this with anyone.",
                color:'text-muted'
            });
            setEmail(value);
        }

    }
    // type,name,google_token,email,password
    const signinHandler = () => {
        setActiveState(false);
        signinAPI({

            type:'00',
            email:email,
            password:password

        },(err,responce)=>{
            if(err){
                setActiveState(true);
                alert(responce);
            }else{
                setActiveState(true);
                history.push(responce.path);
            }
            
        });
        
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
                        <FormControl id="signin-email-txt" type="email" onChange={emailHandler}  placeholder="Enter your email address" />
                    </InputGroup>
                    <small  className={emailSmall.color}>{emailSmall.text}</small>
                </form>

                <form className="w3-container">
                    <label className="w3-text-blue"><span style={{fontFamily:"Old Standard TT",fontWeight:"500"}}>Password</span></label>
                    <InputGroup>
                        <InputGroup.Prepend>
                        <InputGroup.Text><RiLockPasswordLine color="black"/></InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl id="signin-password-txt" type="password" onChange={passwordHandler} placeholder="Enter your password" />
                    </InputGroup>
                    <small className={passwordSmall.color}>{passwordSmall.text}</small>
                </form>

                <p style={{textAlign:"center",marginTop:"8px"}}>
                    {activeState && <Button variant="outline-primary" onClick={signinHandler} active> Sign-in</Button>}
                    {!activeState && <Button variant="primary" disabled>Please wait ...&nbsp;<Spinner animation="grow" size="sm" variant="light"/></Button>}
                </p>


                <p style={{textAlign:"center"}}>-&nbsp;OR&nbsp;-</p>

                <p style={{textAlign:"center"}}>
                    <GoogleLogin
                    clientId={clientId}
                    render={renderProps => (
                        <Button onClick={renderProps.onClick} variant="light"><span className="pt-1">Continue with <FcGoogle/>oogle</span></Button>
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