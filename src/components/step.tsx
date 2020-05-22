import React, { Component } from "react"; // let's also import Component
import "./step.scss";

type StepProps = {
	index: number;
};

export class Step extends Component<StepProps> {
	render() {
		return <div className="step">{this.props.children}</div>;
	}
}
