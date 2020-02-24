import React from "react";
import HeroBody from "./bulma/hero/hero-body";
import { Switch, Route } from "react-router-dom";
import routes from "./routes";

export default class Body extends React.Component {
  render() {
    return (
      <HeroBody>
        <Switch>
          {
            routes.map((route, i) => (
              <Route path={route.path} exact component={route.component} key={i} />
            ))
          }
        </Switch>
      </HeroBody>
    );
  }
}
