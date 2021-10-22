import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import routes from "./global/routes";
const BaseApp = () => {
  return (
    <Router>
      <Switch>
        {routes.map((route) => (
          <Route
            key={route.key}
            path={route.path}
            exact={route.exact}
            component={route.app}
          />
        ))}
      </Switch>
    </Router>
  );
};

export default BaseApp;
