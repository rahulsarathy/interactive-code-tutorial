import React, { Component } from "react";
import "../description.scss";

type PublishingProps = {};

type PublishingState = {
  steps: PublishingComponent[];
};

type PublishingComponent = {
  publishingComponentType: PublishingComponentType;
};

enum PublishingComponentType {
  description = "description",
  step = "step",
}

export class Publishing extends Component<PublishingProps, PublishingState> {
  constructor(props: PublishingProps) {
    super(props);

    this.state = {
      steps: [],
    };
  }

  addStep() {}

  render() {
    return (
      <div className="publishing">
        <div className="header">
          <h1>
            Draft of '<span className="title-name">Untitled</span>'
          </h1>
          <div className="publishing-buttons">
            <button className="preview">Preview</button>
            <button className="publish">Publish</button>
          </div>
        </div>
      </div>
    );
  }
}
