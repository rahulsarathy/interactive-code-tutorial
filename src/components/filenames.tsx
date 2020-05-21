import React, { Component } from "react";
import "./filenames.scss";

import { FileName } from "./filename";

export class FileNames extends Component {
	render() {
		return (
			<div className="filenames">
				<FileName>index.jsx</FileName>
				<FileName>index.css</FileName>
			</div>
		);
	}
}
