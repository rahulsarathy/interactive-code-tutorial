import React, { Component } from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import okaidia from "react-syntax-highlighter/dist/esm/styles/prism/okaidia";
import "./code_view.scss";
import { codeString } from "../code_string";

SyntaxHighlighter.registerLanguage("jsx", jsx);

export class CodeView extends Component {
	render() {
		return (
			<div className="code_view">
				<SyntaxHighlighter
					showLineNumbers={true}
					language="jsx"
					style={okaidia}
				>
					{codeString}
				</SyntaxHighlighter>
			</div>
		);
	}
}
