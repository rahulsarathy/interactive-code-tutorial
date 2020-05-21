import React, { Component } from "react"; // let's also import Component
import "./App.scss";

import { Description } from "./components/description";

import { CodePreview } from "./components/code_preview";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Description />
        <CodePreview />
      </div>
    );
  }
}
