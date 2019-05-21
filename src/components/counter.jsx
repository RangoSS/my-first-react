import React, { Component } from "react";

class Counter extends Component {
  //this state variable is a a property is available globally in an object
  state = {
    count: this.props.value,
    tags: ["Home", "About", "Login"],
    array2: [],
    imageUrl: "https://picsum.photos/200"
  };

  //to solve the binding issues
  //all this done for event handler you must create constructor for all event handlers methods
  /*constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
  }
  */
  //event methods
  // because handleIncrement method cannot see state propert the we create constuctor to referent count property
  //or we can also use arrow function
  handleIncrement = () => {
    console.log("increment Clicked", this.count); //this always refference current object
    // this.state.count++; //in other languages we do like this
    this.setState({ count: this.state.count + 1 }); //in react we go to libraby and call setState function
  };

  handleDecrement = () => {
    console.log("increment Clicked", this.count); //this always refference current object
    // this.state.count++; //in other languages we do like this
    this.setState({ count: this.state.count - 1 }); //in react we go to libraby and call setState function
  };
  render() {
    console.log("props", this.props); ///all the propert are available now
    //this will be compile by React.createElement
    //we use braces to render values dynamicaly
    React.createElement("div");
    return (
      <div>
        <h1> {this.renderMethod()}</h1>
        <ul>
          {this.state.tags.map(tag => (
            <li className="list-inline-item" key={tag}>
              {tag}
            </li> // this is how we render a list of items (array)
          ))}
        </ul>
        <br />
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>

        <button
          onClick={this.handleDecrement}
          className="btn btn-success btn-sm m-2"
        >
          Decrement
        </button>

        <p>come i miss you alot</p>
        <img src={this.state.imageUrl} alt="" />
      </div>
    );
  }
  //underneath start methods
  renderMethod() {
    if (this.state.array2.length === 0) return <p>enty variable dear</p>;
  }
  //badge classess this deals with Dom Classes
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary"; //:this stands for else
    return classes;
  }

  //this is method or function
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "manoto" : count;
  }
}

export default Counter;
