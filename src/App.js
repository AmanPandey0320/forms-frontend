import { Switch,BrowserRouter as Router,Route} from 'react-router-dom';
import { Routes } from './Routes'

function App() {
  return (
    <div className="App">
      <Router>
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
      </Router>
      {/* <Home/> */}
    </div>
  );
}

export default App;
