import React, { Component } from "react";

export class CodeLine extends Component {
	render() {
		return <div className="codeline">{this.props.children}</div>;
	}
}
