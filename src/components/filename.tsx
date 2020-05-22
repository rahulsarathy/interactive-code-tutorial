import React, { Component } from "react";
import "./filenames.scss";

type FileNameProps = {
	selected: boolean;
	changeSelected: (selected_file: number) => void;
	index: number;
};

export class FileName extends Component<FileNameProps> {
	constructor(props: FileNameProps) {
		super(props);

		this.state = {};
	}

	render() {
		let style = {
			color: "white",
		};
		if (!this.props.selected) {
			style.color = "#898984";
		}

		return (
			<div
				style={style}
				onClick={(e) => {
					this.props.changeSelected(this.props.index);
				}}
				className="filename"
			>
				{this.props.children}
			</div>
		);
	}
}
