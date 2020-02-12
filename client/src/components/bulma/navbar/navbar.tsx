import React from "react";

interface NavBarProps {
  renderAs: "div" | "header";
}

export default class NavBar extends React.Component<NavBarProps> {
  static defaultProps: NavBarProps = {
    renderAs: "div"
  }

  constructor(props: NavBarProps) {
    super({ ...NavBar.defaultProps, ...props })
  }

  render() {
    return this.props.renderAs === "div"
      ? (
        <div className="navbar">
          {this.props.children}
        </div>
      ) : (
        <header className="navbar">
          {this.props.children}
        </header>
      )
  }
}
