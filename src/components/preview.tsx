import React, { Component } from "react"; // let's also import Component
import "./preview.scss";

import sudoku from "../images/sudoku.svg";

export class Preview extends Component {
	render() {
		return (
			<div className="preview">
				<div className="toggle-preview">Preview</div>
				<div className="preview-image">
					<img src={sudoku} />
				</div>
			</div>
		);
	}
}
