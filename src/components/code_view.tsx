import React, { Component } from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import okaidia from "react-syntax-highlighter/dist/esm/styles/prism/okaidia";
import "./code_view.scss";
import { codeString } from "../code_string";
import { CodeLine } from "./code_line";

SyntaxHighlighter.registerLanguage("jsx", jsx);

const matched: number[] = [1, 2];

export class CodeView extends Component {
	render() {
		return (
			<div className="code_view">
				<SyntaxHighlighter
					showLineNumbers={true}
					language="jsx"
					style={okaidia}
					customStyle={{
						fontSize: "14px",
						background: "#22221d",
					}}
					wrapLines={true}
					CodeTag={CodeLine}
					lineProps={(lineNumber: number) => {
						return {
							color: "red",
						};
					}}
				>
					{codeString}
				</SyntaxHighlighter>
			</div>
		);
	}
}
