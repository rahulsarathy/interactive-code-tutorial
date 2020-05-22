import React, { Component } from "react";
import "./code_preview.scss";

import { CodeView } from "./code_view";
import { Preview } from "./preview";
import { FileNames } from "./filenames";

type CodePreviewProps = {};

type CodePreviewState = {
	selected_file: number;
	files: string[];
};

export class CodePreview extends Component<CodePreviewProps, CodePreviewState> {
	constructor(props: CodePreviewProps) {
		super(props);

		this.state = {
			files: ["index.jsx", "index.css"],
			selected_file: 0,
		};
	}

	render() {
		return (
			<div className="code_preview">
				<Preview />
				<FileNames
					files={this.state.files}
					selected_file={this.state.selected_file}
				/>
				<CodeView />
			</div>
		);
	}
}
