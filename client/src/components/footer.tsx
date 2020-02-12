import React from "react";
import HeroFoot from "./bulma/hero/hero-foot";
import Tabs from "./bulma/tabs";
import Container from "./container";

export default class Footer extends React.Component {
  render() {
    return (
      <HeroFoot>
        <Tabs isBoxed isFullWidth renderAs="nav">
          <Container>
            <ul>
              <li className="is-active"><a>Overview</a></li>
              <li><a>Modifiers</a></li>
              <li><a>Grid</a></li>
              <li><a>Elements</a></li>
              <li><a>Components</a></li>
              <li><a>Layout</a></li>
            </ul>
          </Container>
        </Tabs>
      </HeroFoot>
    )
  }
}
