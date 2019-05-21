import React, { Component } from "react";
import Counter from "./counter";
class Mugumo extends Component {
  state = {};
  render() {
    //all the React data must be strored here
    return (
      <div>
        <h1>page 2 of reactr </h1>

        <Counter />
        <Counter />
      </div>
    );
  }
}

export default Mugumo;
