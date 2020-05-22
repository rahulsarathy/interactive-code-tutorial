import React, { Component } from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import css from "react-syntax-highlighter/dist/esm/languages/prism/css";

import okaidia from "react-syntax-highlighter/dist/esm/styles/prism/okaidia";
import "./code_view.scss";
import { filenames, Language } from "../code_string";
import { CodeLine } from "./code_line";

SyntaxHighlighter.registerLanguage("css", css);
SyntaxHighlighter.registerLanguage("jsx", jsx);

type CodeViewProps = {
	selected_file: number;
};

type CodeViewState = {
	language: Language;
};

export class CodeView extends Component<CodeViewProps, CodeViewState> {
	constructor(props: CodeViewProps) {
		super(props);

		this.state = {
			language: Language.jsx,
		};
	}

	componentDidUpdate(prevProps: CodeViewProps, prevstate: CodeViewState) {
		let { selected_file } = this.props;
		if (prevProps.selected_file !== selected_file) {
			this.setState({
				language: filenames[selected_file].language,
			});
		}
	}

	render() {
		let { selected_file } = this.props;

		return (
			<div className="code_view">
				<SyntaxHighlighter
					showLineNumbers={true}
					language={this.state.language}
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
					{filenames[selected_file].code_string}
				</SyntaxHighlighter>
			</div>
		);
	}
}
