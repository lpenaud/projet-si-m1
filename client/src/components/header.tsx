import React from "react";
import HeroHead from "./bulma/hero/hero-head";
import Navbar from "./bulma/navbar/navbar";
import NavbarItemDiv from "./bulma/navbar/navbar-item/navbar-item-div";
import NavbarMenu from "./bulma/navbar/navbar-menu";
import NavbarEnd from "./bulma/navbar/navbar-end";
import NavbarBrand from "./bulma/navbar/navbar-brand";
import NavbarBurger from "./bulma/navbar/navbar-burger";
import { updateState } from "helpers/components";
import NavbarItemLink from "./bulma/navbar/navbar-item/navbar-item-link";
import routes from "./routes";

interface HeaderState {
  burgerIsActive: boolean;
}

export default class Header extends React.Component<{}, HeaderState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      burgerIsActive: false,
    };
    this.burgerOnClick = this.burgerOnClick.bind(this);
  }

  burgerOnClick() {
    updateState(this, "burgerIsActive", !this.state.burgerIsActive);
  }

  render() {
    return (
      <HeroHead>
        <Navbar>
          <NavbarBrand>
            <NavbarItemDiv>
              <NavbarItemDiv>
                <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo"/>
              </NavbarItemDiv>
            </NavbarItemDiv>
            <NavbarBurger onClick={this.burgerOnClick} isActive={this.state.burgerIsActive} />
          </NavbarBrand>
          <NavbarMenu isActive={this.state.burgerIsActive}>
            <NavbarEnd>
              {
                routes.map((route, i) => (
                  <NavbarItemLink to={route.path} key={i}>
                    {route.label}
                  </NavbarItemLink>
                ))
              }
            </NavbarEnd>
          </NavbarMenu>
        </Navbar>
      </HeroHead>
    );
  }
}