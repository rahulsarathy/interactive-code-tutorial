import React, { Component } from "react";
import "./filenames.scss";

export class FileName extends Component {
	render() {
		return <div className="filename">{this.props.children}</div>;
	}
}
