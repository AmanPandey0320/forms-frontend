import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from '../views/home';
import EntryPoint from '../views/signUpIn';
import Navbar from '../components/navbar/navbar';

const Forms = () => {

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