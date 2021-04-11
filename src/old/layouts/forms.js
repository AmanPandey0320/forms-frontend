import {BrowserRouter,Switch,Route,useHistory} from 'react-router-dom';
import {useState,useEffect} from 'react';
import Home from '../old/views/home';
import CreateForm from '../old/views/createform';
import Navbar from '../components/navbar/navbar';
import {verifyUser} from '../old/repository/auth.handler';
import Dashboard from '../old/views/dashboard';
import { SiFacebook } from 'react-icons/si';
import FormView from '../old/views/formView';

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
                if(result.status == 200){
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
                <CreateForm edit='0' valid={isValid}/>
            </Route>
            <Route exact path = '/editform'>
                <CreateForm edit='1' valid={isValid}/>
            </Route>
            <Route exact path="/dashboard">
                <Navbar BrandName="Forms" valid={isValid} pageName='home'/>
                <Dashboard valid={isValid}/>
            </Route>
            <Route exact path='/form/:id'>
                <FormView valid={isValid} theme={0} />
            </Route>
            <Route exact path='/template'>
                <p>template</p>
            </Route>
        </BrowserRouter>
        </>
     );
}
 
export default Forms;