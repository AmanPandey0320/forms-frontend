import dotenv from 'dotenv';
import './signupin.css';
import {FormControl,Button,InputGroup,Spinner ,Form} from 'react-bootstrap';
import NavBar from '../navbar/navbar';
import {SiMailDotRu} from 'react-icons/si';
import {useState,useEffect} from 'react';
import {RiLockPasswordLine} from 'react-icons/ri';
import {FcGoogle} from 'react-icons/fc';
import {Link,useHistory,browserHistory} from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import {signupAPI} from '../../repository/auth.handler';

dotenv.config();


const SignupCard = () => {

    const [passwordSmall,setPasswordSmall] = useState({
        text:' ',
        color:'text-muted'
    });
    const [emailSmall,setEmailSmall] = useState({
        text:"We will never share this with anyone.",
        color:'text-muted'
    });
    const [confirmPasswordSmall,setconfirmPasswordSmall] = useState({text:" ",color:'text-muted'});
    const [activeState,setActiveState] = useState(true);
    const [email,setEmail]=useState(' ');
    const [password,setPassword]=useState(' ');
    const [confirmPass ,setConfirmPass]=useState(' ');
    const history = useHistory();

    const clientId = process.env.REACT_APP_google_client_id;


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
                color:'text-success'
            });
            setEmail(value);
        }

    }

    const passwordHandler = (event)=>{
        const value = event.target.value;
        if(value.length < 8)
        setPasswordSmall({text:"password should have at least 8 characters!",color:'text-danger'});
        if(value.length >= 8){
            setPasswordSmall({text:"Everything looks good!",color:'text-success'});
            setPassword(value)
        }
    }
    
    const confirmPasswordHandler = (event)=>{

        const value = event.target.value;
        // console.log(value);
        if(value != password){
            setConfirmPass(' ');
            setconfirmPasswordSmall({text:'Passwords do not match!',color:'text-warning'});
        }else{
            setConfirmPass(value);
            setconfirmPasswordSmall({text:"Everything looks good!",color:"text-success"})
        }

    }

    // "type":"00",
    // "name":"aman",
    // "email":"info.cse2k19@gmail.com",
    // "password":"aman@1234"


    const signupHandler = () => {
        setActiveState(false);
        if(confirmPass != password){
            setActiveState(true);
            alert('Passwords do not match!');
        }else if(!email){
            setActiveState(true);
            alert('Email cannot be null!');
        }else{

            const data = {
                type: '00',
                email: email,
                password: password,
            }

            signupAPI(data,(err)=>{
                if(err){
                    setActiveState(true);
                    alert('Unable to sign up!');
                }else{
                    setActiveState(true);
                    // history.push('/');
                    alert('Please verify your e-mail.');
                }
            })

        }

    }
    const responseGoogle = (responce) => {
        const token = responce.accessToken;
        console.log(responce);
    }

    return ( 
        <div className="my-sign-up-in-card">
            <NavBar BrandName="Forms" pageName="enter" />
            <p className="text-primary mt-2 mr-2" style={{textAlign:"right",textDecoration:"none",fontWeight:"500"}}><Link to="/signin">Already a user? Sign-in</Link></p>
            <h4 className="mt-4" style={{textAlign: 'center'}}>Sign Up</h4>
            <div className="mx-3">
                <form className="w3-container">
                    <label className="w3-text-blue"><span style={{fontFamily:"Old Standard TT",fontWeight:"500"}}>Email address</span></label>
                    <InputGroup>
                        <InputGroup.Prepend>
                        <InputGroup.Text><SiMailDotRu color="black"/></InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl id="signup-email-txt" onChange={emailHandler} placeholder="Enter your email address" />
                    </InputGroup>
                    <small  className={emailSmall.color}>{emailSmall.text}</small>
                </form>

                <form className="w3-container">
                    <label className="w3-text-blue"><span style={{fontFamily:"Old Standard TT",fontWeight:"500"}}>Password</span></label>
                    <InputGroup>
                        <InputGroup.Prepend>
                        <InputGroup.Text><RiLockPasswordLine color="black"/></InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl id="signup-password-txt" onChange={passwordHandler} placeholder="Enter your password" />
                    </InputGroup>
                    <small className={passwordSmall.color}>{passwordSmall.text}</small>
                </form>

                <form className="w3-container">
                    <label className="w3-text-blue"><span style={{fontFamily:"Old Standard TT",fontWeight:"500"}}>Confirm password</span></label>
                    <InputGroup>
                        <InputGroup.Prepend>
                        <InputGroup.Text><RiLockPasswordLine color="black"/></InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl id="signup-confirm-password-txt" onChange={confirmPasswordHandler} placeholder="Confirm your password" />
                    </InputGroup>
                    <small className={confirmPasswordSmall.color}>{confirmPasswordSmall.text}</small>
                </form>

                <p style={{textAlign:"center",marginTop:"8px"}}>
                    {activeState && <Button variant="outline-primary" onClick={signupHandler} active> Sign-up</Button>}
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
                <img className="mt-4" src="/assets/logo.svg"
                height = "64"
                width="64"/>
                <h6>All copyrights reserved @ Forms</h6>
            </div>
        </div>
    );
}
 
export default SignupCard;