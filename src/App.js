import React, { Component } from "react";
import { Flexi } from "./form";
const flexiConfig = {
  items: [
    {
      name: "person_name",

      label: "Person's Name",

      type: "TextField",
    },

    {
      name: "states",

      label: "Person's state",

      type: "DropDown",

      values: ["Maharashtra", "Kerala", "Tamil Nadu"],
    },
  ],
};
class App extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      place: "",
    };
  }

  onFlexiSubmit = (val) => {
    this.setState({ name: val.name, place: val.dd });
  };

  render() {
    return (
      <div style={{position:"relative",left:'35%'}}>
        <Flexi onSubmitFn={this.onFlexiSubmit} config={flexiConfig} />
        <div > 
          <p>{this.state.name && `name: ${this.state.name}`}</p>
          <p>{this.state.place && `state: ${this.state.place}`}</p>
        </div>
      </div>
    );
  }
}

export default App;
