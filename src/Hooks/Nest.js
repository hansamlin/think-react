import React from "react";
import { Switch, Route, Link, useRouteMatch, Redirect } from "react-router-dom";
import ComputerTable from "./computer/ComputerTable";
import Count from "./Count";
import Title from "./First";

export default () => {
  let { path, url } = useRouteMatch();

  return (
    <div>
      <h2>Hooks</h2>
      <ul>
        <li>
          <Link to={`${url}/computer`}>Computer</Link>
        </li>
        <li>
          <Link to={`${url}/count`}>Count</Link>
        </li>
        <li>
          <Link to={`${url}/title`}>Title</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <Redirect to={`${path}/computer`} />
        </Route>
        <Route exact path={`${path}/computer`} component={ComputerTable} />
        <Route exact path={`${path}/count`} component={Count} />
        <Route exact path={`${path}/title`} component={Title} />
      </Switch>
    </div>
  );
};
