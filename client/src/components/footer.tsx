import React from "react";
import HeroFoot from "./bulma/hero/hero-foot";
import Tabs from "./bulma/tabs";
import Container from "./container";
import { Link } from "react-router-dom";

export default class Footer extends React.Component {
  render() {
    return (
      <HeroFoot>
        <Tabs isBoxed isFullWidth>
          <Container>
            <ul>
              <li className="is-active"><Link to="/">Home</Link></li>
              <li><Link to="/test">Test</Link></li>
            </ul>
          </Container>
        </Tabs>
      </HeroFoot>
    )
  }
}
