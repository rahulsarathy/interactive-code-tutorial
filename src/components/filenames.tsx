import React, { Component } from "react";
import "./filenames.scss";

import { FileName } from "./filename";

type FileNamesProps = {
	selected_file: number;
	files: string[];
	changeSelected: (selected_file: number) => void;
};

export class FileNames extends Component<FileNamesProps> {
	constructor(props: FileNamesProps) {
		super(props);

		this.state = {};
	}

	renderFile(filename: string, index: number) {
		let selected: boolean = false;

		if (this.props.selected_file === index) {
			selected = true;
		}

		return (
			<FileName
				changeSelected={this.props.changeSelected}
				selected={selected}
				key={index}
				index={index}
			>
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
