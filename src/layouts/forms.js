import {BrowserRouter,Switch,Route} from 'react-router-dom';
import {useState,useEffect} from 'react';
import Home from '../views/home';
import EntryPoint from '../views/signUpIn';
import Navbar from '../components/navbar/navbar';
import {verifyUser} from '../repository/auth.handler';

const Forms = () => {

    const [isValid,setValid] = useState(false); 
    const [user,setUser] = useState(null);

    useEffect(() =>{

        const verification_result = (err, result) =>{
            console.log(result);
        }

        verifyUser(verification_result);

    });

    return ( 
        <>
        <BrowserRouter>
            <Route exact path = '/'>
                <Navbar BrandName="Forms" pageName='home'/>
                <Home />
            </Route>
            <Route exact path = '/home'>
                <Navbar BrandName="Forms" pageName='home'/>
                <Home/>
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