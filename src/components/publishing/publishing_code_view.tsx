import React, { Component } from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import "../code_view.scss";

import okaidia from "react-syntax-highlighter/dist/esm/styles/prism/okaidia";


export class PublishingCodeView extends Component {
	render() {
		return (
			<div className="code_view">
					<SyntaxHighlighter
					showLineNumbers={true}
					language='javascript'
					style={okaidia}
					customStyle={{
						fontSize: "14px",
						background: "#22221d",
					}}
					wrapLines={true}
					lineProps={(lineNumber: number) => {
						return {
							color: "red",
						};
					}}
				>
					{"Enter code here"}
				</SyntaxHighlighter>
			</div>
		);
	}
}
