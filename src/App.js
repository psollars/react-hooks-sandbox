import React, { Component } from "react";
import Hook from "./Hook";
import NotHook from "./NotHook";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div style={this.style}>
            <div>
              not broken, but not hot
              <NotHook />
            </div>
            <div>
              oh my god, give me hooks
              <Hook />
            </div>
          </div>
        </header>
      </div>
    );
  }

  style = {
    display: "flex",
    justifyContent: "space-between",
    padding: 40,
    width: 800
  };
}

export default App;
