import React from "react";
import HeroFoot from "./bulma/hero/hero-foot";
import Content from "./bulma/content";

export default class Footer extends React.Component {
  render() {
    return (
      <HeroFoot>
        <Content alignment="has-text-centered">
          <p>
            &#x1f12f; Loïc Penaud
          </p>
        </Content>
      </HeroFoot>
    );
  }
}
