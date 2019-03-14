import React, { Component } from "react";

export default class extends Component {
  state = { visible: false };

  componentDidUpdate({ myName: prev }) {
    if (prev !== this.props.myName) {
      this.setState({ visible: false });
    }
  }

  handleChange = e => {
    this.setState({ visible: e.target.checked });
  };

  render() {
    const { visible } = this.state;
    return (
      <div>
        <div>
          <span>Hey {this.props.myName} i have something for you</span>
          <br />
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
