import React, { Component } from "react";
import "./filenames.scss";

type FileNameProps = {
	selected: boolean;
};

export class FileName extends Component<FileNameProps> {
	constructor(props: FileNameProps) {
		super(props);

		this.state = {};
	}

	render() {
		return <div className="filename">{this.props.children}</div>;
	}
}
