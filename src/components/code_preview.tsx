import React, { Component } from "react";
import "./code_preview.scss";

import { CodeView } from "./code_view";
import { Preview } from "./preview";

export class CodePreview extends Component {
	render() {
		return (
			<div className="code_preview">
				<Preview />
				<CodeView />
			</div>
		);
	}
}
