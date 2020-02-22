import React from "react";

interface Props {
  children: React.ReactNode[];
}

interface State {
  index: number;
}

class Slider extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      index: 0
    };
  }

  handleScroll = (event: Event) => {
    let index = this.state.index;
    if (
      (event as WheelEvent).deltaY > 0 &&
      index < this.props.children.length - 1
    ) {
      window.scrollTo({
        top: (index + 1) * window.innerHeight,
        behavior: "smooth"
      });
      this.setState({ index: index + 1 });
    } else if ((event as WheelEvent).deltaY < 0 && index > 0) {
      window.scrollTo({
        top: (index - 1) * window.innerHeight,
        behavior: "smooth"
      });
      this.setState({ index: index - 1 });
    }
  };

  handleKeyDown = (event: Event) => {
    let index = this.state.index;
    if (
      ((event as KeyboardEvent).key === "ArrowDown" ||
        (event as KeyboardEvent).key === "PageDown") &&
      index < this.props.children.length - 1
    ) {
      window.scrollTo({
        top: (index + 1) * window.innerHeight,
        behavior: "smooth"
      });
      this.setState({ index: index + 1 });
    } else if (
      ((event as KeyboardEvent).key === "ArrowUp" ||
        (event as KeyboardEvent).key === "PageUp") &&
      index > 0
    ) {
      window.scrollTo({
        top: (index - 1) * window.innerHeight,
        behavior: "smooth"
      });
      this.setState({ index: index - 1 });
    }
  };

  componentDidMount = () => {
    window.addEventListener("mousewheel", this.handleScroll.bind(this));
    window.addEventListener("keydown", this.handleKeyDown.bind(this));
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  componentWillUnmount = () => {
    window.removeEventListener("mousewheel", this.handleScroll.bind(this));
    window.removeEventListener("keydown", this.handleKeyDown.bind(this));
  };

  componentDidUpdate = () => {};

  render = () => {
    return <div>{this.props.children}</div>;
  };
}

export { Slider };
