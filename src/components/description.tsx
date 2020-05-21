import React, { Component } from "react";
import "./description.scss";
import { Step } from "./step";

export class Description extends Component {
	render() {
		return (
			<div className="description">
				<div className="content">
					<h1>Tutorial: Intro to React</h1>
					<p className="subtitle">
						This tutorial doesn't assume any existing React
						Knowledge
					</p>
					<hr />

					<h2>Inspecting the Starter Code</h2>
					<p>
						If you’re going to work on the tutorial in your browser,
						open this code in a new tab: Starter Code. If you’re
						going to work on the tutorial locally, instead open{" "}
						<code>src/index.js</code> in your project folder (you
						have already touched this file during the setup).
					</p>

					<p>
						This Starter Code is the base of what we’re building.
						We’ve provided the CSS styling so that you only need to
						focus on learning React and programming the tic-tac-toe
						game.
					</p>
				</div>
				<Step>
					<p className="step-header">Passing Data Through Props</p>
					<p>
						To get our feet wet, let’s try passing some data from
						our Board component to our Square component.
					</p>
					<p>
						We strongly recommend typing code by hand as you’re
						working through the tutorial and not using copy/paste.
						This will help you develop muscle memory and a stronger
						understanding.
					</p>
					<p>
						In Board’s renderSquare method, change the code to pass
						a prop called value to the Square.
					</p>
				</Step>
			</div>
		);
	}
}
