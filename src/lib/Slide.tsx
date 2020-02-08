import React from "react";

interface Props {
  children: React.ReactNode;
}

class Slide extends React.Component<Props> {
  render() {
    return <div style={{ height: "100%" }}>{this.props.children}</div>;
  }
}

export { Slide };
