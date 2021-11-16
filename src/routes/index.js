import { Route, Switch } from "react-router";
import Registration from "../pages/Registration";
import Sucess from "../pages/Sucess";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Registration />
      </Route>
      <Route exact path="/sucess/:name">
        <Sucess />
      </Route>
    </Switch>
  );
}

export default Routes;
