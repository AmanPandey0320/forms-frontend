import {BrowserRouter,Switch,Route} from 'react-router-dom';
import {useState,useEffect} from 'react';
import Home from '../views/home';
import CreateForm from '../views/createform';
import EntryPoint from '../views/signUpIn';
import Navbar from '../components/navbar/navbar';
import {verifyUser} from '../repository/auth.handler';
import { SiFacebook } from 'react-icons/si';

const Forms = () => {

    const [isValid,setValid] = useState(false); 
    const [user,setUser] = useState(null);

    useEffect(() =>{

        const verification_result = (err, result) =>{
            if(err){
                setValid(false);
            }else{
                setValid(true);
            }
        }

        verifyUser(verification_result);

    });

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
                <Navbar BrandName="Forms" valid={isValid} pageName='newform'/>
                <CreateForm/>
            </Route>
            <Route exact path = '/signup'>
                <EntryPoint  card="up"/>
            </Route>
            <Route exact path = '/signin'>
                <EntryPoint  card="in"/>
            </Route>
        </BrowserRouter>
        </>
     );
}
 
export default Forms;