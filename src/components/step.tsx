import React, { Component } from "react"; // let's also import Component
import "./step.scss";

export class Step extends Component {
	render() {
		return <div className="step">{this.props.children}</div>;
	}
}
