import React, { Component } from "react";

export default class extends Component {
  state = { visible: false };

  handleChange = e => {
    this.setState({ visible: e.target.checked });
  }

  render() {
    const { visible } = this.state;
    return (
      <div>
        <div>
          <label htmlFor="wannaSee">I want to see it</label>
          <input
            name="wannaSee"
            type="checkbox"
            checked={visible}
            onChange={this.handleChange}
          />
        </div>
        {visible && (
          <img
            src="http://cdn.akc.org/content/hero/puppy-boundaries_header.jpg"
            width={200}
            height={150}
          />
        )}
      </div>
    );
  }
}
