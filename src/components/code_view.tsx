import React, { Component } from "react";
import "./code_view.scss";

import { FileNames } from "./filenames";

export class CodeView extends Component {
	render() {
		return (
			<div className="code_view">
				<FileNames />
			</div>
		);
	}
}
