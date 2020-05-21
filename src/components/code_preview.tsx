import React, { Component } from "react";
import "./code_preview.scss";

import { CodeView } from "./code_view";
import { Preview } from "./preview";
import { FileNames } from "./filenames";

export class CodePreview extends Component {
	render() {
		return (
			<div className="code_preview">
				<Preview />
				<FileNames />
				<CodeView />
			</div>
		);
	}
}
