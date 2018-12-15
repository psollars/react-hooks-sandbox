import React, { Component } from "react";

export default class NotHook extends Component {
  state = {
    count: 0,
    enabled: false
  };

  incrementCounter = () => {
    this.setState(({ count }) => ({ count: count + 1 }));
  };

  toggleFeature = () => {
    this.setState(({ enabled }) => ({ enabled: !enabled }));
  };

  render() {
    const { count, enabled } = this.state;

    return (
      <div>
        <p>{count}</p>
        <button onClick={this.incrementCounter}>Count it 👆</button>

        <p>{enabled ? "It's on!" : "It's off."}</p>
        <button onClick={this.toggleFeature}>Toggle it 🎚</button>
      </div>
    );
  }
}
