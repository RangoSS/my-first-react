import React, { Component } from "react";
import Counter from "./counter";

class ListLink extends Component {
  state = {
    counted: [
      { id: 1, value: 5 },
      { id: 2, value: 3 },
      { id: 3, value: 4 },
      { id: 4, value: 0 }
    ]
  };

  render() {
    return (
      <div>
        {this.state.counted.map(counter => (
          <Counter key={counter.id} value={counter.value} selected={true} />
        ))}
      </div>
    );
  }
}

export default ListLink;
