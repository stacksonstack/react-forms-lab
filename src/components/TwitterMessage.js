import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      maxChars : 0,
      text: "" 
    };
  }

  handleEvent(e){
    this.setState({
      maxChars : e.target.value.length,
      text: e.target.value
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.text}
        onChange={(e) => this.handleEvent(e)}/>
        {this.props.maxChars - this.state.maxChars}
      </div>
    );
  }
}

export default TwitterMessage;

