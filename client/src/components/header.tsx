import React from "react";
import HeroHead from "./bulma/hero/hero-head";
import Navbar from "./bulma/navbar/navbar";
import NavbarItem from "./bulma/navbar/navbar-item";
import NavbarMenu from "./bulma/navbar/navbar-menu";
import NavbarEnd from "./bulma/navbar/navbar-end";
import NavbarBrand from "./bulma/navbar/navbar-brand";
import NavbarBurger from "./bulma/navbar/navbar-burger";
import NavBar from "./bulma/navbar/navbar";
import { updateState } from "helpers/components";

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
            <NavbarItem renderAs="div">
              <NavbarItem>
                <img src="https://bulma.io/images/bulma-logo.png" alt="Logo"/>
              </NavbarItem>
            </NavbarItem>
            <NavbarBurger onClick={this.burgerOnClick} isActive={this.state.burgerIsActive} />
          </NavbarBrand>
          <NavbarMenu isActive={this.state.burgerIsActive}>
            <NavbarEnd>
              <NavbarItem isActive>Home</NavbarItem>
              <NavbarItem>Examples</NavbarItem>
              <NavbarItem>Documentation</NavbarItem>
            </NavbarEnd>
          </NavbarMenu>
        </Navbar>
      </HeroHead>
    )
  }
}