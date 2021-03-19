import {BrowserRouter,Switch,Route,useHistory} from 'react-router-dom';
import {useState,useEffect} from 'react';
import Home from '../views/home';
import CreateForm from '../views/createform';
import EntryPoint from '../views/signUpIn';
import Navbar from '../components/navbar/navbar';
import {verifyUser} from '../repository/auth.handler';
import Dashboard from '../views/dashboard';
import { SiFacebook } from 'react-icons/si';

const Forms = () => {

    const [isValid,setValid] = useState(false); 
    const [user,setUser] = useState(null);
    const history = useHistory();

    useEffect(() =>{

        const verification_result = (err, result) =>{
            if(err){
                setValid(false);
            }else{
                // console.log(result);
                if(result.verify_response.status == 200){
                    setValid(true);
                }else{
                    setValid(false);
                }
            }
        }

        verifyUser(verification_result);

    },[]);

    return ( 
        <>
        <BrowserRouter>
            <Route exact path = '/'>
                <Navbar BrandName="Forms" valid={isValid} pageName='home'/>
                <Home />
            </Route>
            <Route exact path = '/home'>
                <Navbar BrandName="Forms" valid={isValid} pageName='home'/>
                <Home/>
            </Route>
            <Route exact path = '/newform'>
                <CreateForm valid={isValid}/>
            </Route>
            <Route exact path = '/signup'>
                <EntryPoint  card="up"/>
            </Route>
            <Route exact path = '/signin'>
                <EntryPoint  card="in"/>
            </Route>
            <Route exact path="/dashboard">
                <Navbar BrandName="Forms" valid={isValid} pageName='home'/>
                <Dashboard valid={isValid}/>
            </Route>
        </BrowserRouter>
        </>
     );
}
 
export default Forms;