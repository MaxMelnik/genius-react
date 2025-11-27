import { Component } from "react";

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "I'm Class Component" };
  }

  render() {
    return <div>{this.state.text}</div>;
  }
}

export default ClassComponent;
