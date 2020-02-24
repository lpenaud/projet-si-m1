import { Component, ReactNode } from "react";
import classNames from "classnames";
import { NavbarItemProps } from "components/bulma/modifiers";

export default abstract class NavbarItem<P extends NavbarItemProps = NavbarItemProps, S = {}, SS = any> extends Component<P, S, SS> {  
  get defaultClassName(): string {
    return classNames({
      "navbar-item": true,
      "is-active": this.props.isActive
    });
  }
  
  abstract render(): ReactNode;
}
