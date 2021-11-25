import { useEffect, useState } from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import { verifyGoogle } from "./lib/utils/user";
import { Routes } from "./Routes";
import { UserProvider } from "./lib/context/userContext";
import Home from "./web/pages/home/index";
import { Provider } from "react-redux";
import store from "./lib/store/store";
import { ToastProvider } from "react-toast-notifications";

function App() {
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    verifyGoogle().then((state) => setAuth(state));
    // console.log('done');
  }, []);
  return (
    <div className="App">
      <ToastProvider
        autoDismiss={true}
        autoDismissTimeout={5000}
        placement="bottom-right"
      >
        <Provider store={store}>
          <UserProvider value={{ verified: auth }}>
            {auth && (
              <Router>
                {/* {console.log(Routes)} */}
                <Switch>
                  {Routes.map((item) => {
                    return (
                      <Route
                        key={item.id}
                        exact={item.exact}
                        path={item.to}
                        component={item.child}
                      />
                    );
                  })}
                </Switch>
              </Router>
            )}
            {!auth && (
              <Router>
                <Switch>
                  <Route path="/form-app" component={Home} />
                </Switch>
              </Router>
            )}
          </UserProvider>
        </Provider>
      </ToastProvider>
    </div>
  );
}

export default App;
