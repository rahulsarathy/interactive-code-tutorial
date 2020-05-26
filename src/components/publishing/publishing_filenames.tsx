import React, { Component } from "react";
import "../filenames.scss";

export class PublishingFileNames extends Component {
  render() {
    return (
      <div className="filenames">
        <button>Add New File +</button>
		<button>Use code from previous step</button>
      </div>
    );
  }
}
