import React from "react";
import HeroFoot from "./bulma/hero/hero-foot";
import Tabs from "./bulma/tabs";
import Container from "./container";
import { NavLink } from "react-router-dom";

export default class Footer extends React.Component {
  render() {
    console.log(window.location.pathname)
    return (
      <HeroFoot>
        <Tabs isBoxed isFullWidth>
          <Container>
            
          </Container>
        </Tabs>
      </HeroFoot>
    )
  }
}
