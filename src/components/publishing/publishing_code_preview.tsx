import React, { Component } from "react";
import "../code_preview.scss";
import { PublishingPreview } from './publishing_preview';
import {PublishingFileNames} from './publishing_filenames';
import {PublishingCodeView} from './publishing_code_view'

type PublishingCodePreviewProps = {

};

export class PublishingCodePreview extends Component<PublishingCodePreviewProps> {
	constructor(props: PublishingCodePreviewProps) {
		super(props);

		this.state = {
		};
	}

	render() {
		return (
			<div className="code_preview">
                <PublishingPreview />
                <PublishingFileNames />
				<PublishingCodeView />
			</div>
		);
	}
}
