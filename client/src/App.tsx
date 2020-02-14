import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Root from "components/routes/root";
import Test from "components/routes/test";

export default function App() {
  return (
    <Router>
      <section className="hero is-primary is-fullheight">
        <Header />
        <Switch>
          <Route exact path="/">
            <Root />
          </Route>
          <Route exact path="/test">
            <Test />
          </Route>
        </Switch>
        <Footer />
      </section>
    </Router>
  );
}
