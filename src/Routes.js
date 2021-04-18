import Home from './pages/Home/index';
import Dashboard from './pages/Dashboard/index';

export const Routes = [
    {
        id:1,
        to:'/',
        child: Home,
        exact:true
    },
    {
        id:2,
        to:'/dashboard',
        child:Dashboard,
        exact:true
    }
]