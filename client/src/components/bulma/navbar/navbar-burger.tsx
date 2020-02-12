import React from "react";
import classNames from "classnames";

interface NavbarBurgerProps {
  isActive?: boolean;
  onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export default class NavbarBurger extends React.Component<NavbarBurgerProps> {
  static defaultProps: Partial<NavbarBurgerProps> = {
    isActive: true,
  }

  constructor(props: NavbarBurgerProps) {
    super({ ...NavbarBurger.defaultProps, ...props });
  }

  render() {
    const className = classNames({
      'navbar-burger': true,
      'is-active': this.props.isActive,
    });
    return (
      <div className={className} aria-label="menu" aria-expanded="false" onClick={this.props.onClick}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    )
  }
}
