import React, { Component } from "react";
import "./filenames.scss";

import { FileName } from "./filename";

type FileNamesProps = {
	selected_file: number;
	files: string[];
};

export class FileNames extends Component<FileNamesProps> {
	constructor(props: FileNamesProps) {
		super(props);

		this.state = {};
	}

	renderFile(filename: string, index: number) {
		if (this.props.selected_file === index) {
			return (
				<FileName selected={true} key={index}>
					{filename}
				</FileName>
			);
		}

		return (
			<FileName selected={false} key={index}>
				{filename}
			</FileName>
		);
	}

	render() {
		return (
			<div className="filenames">
				{this.props.files.map((filename, index) =>
					this.renderFile(filename, index)
				)}
			</div>
		);
	}
}
