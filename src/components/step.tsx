import React, { Component } from "react"; // let's also import Component
import "./step.scss";

type StepProps = {
  index: number;
  selected: number;
  changeStep: (selected_step: number) => void;
};

export class Step extends Component<StepProps> {
  render() {
    let style = {
      boxShadow: "0px 5px 25px rgba(50, 50, 93, 0.12)",
      cursor: "pointer",
    };

    if (this.props.selected !== this.props.index) {
      style.boxShadow = "none";
    }

    return (
      <div
        onClick={(e) => {
          this.props.changeStep(this.props.index);
        }}
        className="step"
        style={style}
      >
        {this.props.children}
      </div>
    );
  }
}
