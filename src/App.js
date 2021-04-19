import { useEffect, useState } from 'react';
import { Switch,BrowserRouter as Router,Route} from 'react-router-dom';
import { verifyGoogle } from './logic/userLogic';
import { Routes } from './Routes'
import { UserProvider } from './context/userContext';
import Home from './pages/Home/index';

function App() {
  const [auth,setAuth] = useState(false);
  useEffect(()=>{
    verifyGoogle().then(state => setAuth(state));
    // console.log('done');
  },[]);
  return (
    <div className="App">
      <UserProvider value={{verified:auth}}>
        {auth && <Router>
          {/* {console.log(Routes)} */}
          <Switch>
            {
              Routes.map(item => {
                return(
                  <Route 
                  key={item.id}
                  exact={item.exact}
                  path={item.to}
                  component={item.child}
                  />
                );
              })
            }
          </Switch>
        </Router>}
        {
          !auth && 
          <Router>
              <Switch>
                  <Route path='/' component={Home}/>
              </Switch>
          </Router>
        }
      </UserProvider>
      {/* <Home/> */}
    </div>
  );
}

export default App;
