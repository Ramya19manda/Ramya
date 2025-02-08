import React, { Component } from 'react';
import './Styles.css'

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "I am attending React class!!!!!",
      clicked: true,
    };
  }

  changeMessage = () => {
    this.setState({
      clicked: false,
      message: "Thanks for coming!!!",
    });
  };

  render() {
    let applyStyle = this.state.clicked ? 'heading2' : 'heading1';
    return (
      <div>
        <h1 className={applyStyle}>{this.state.message}</h1>
        <button onClick={this.changeMessage}>Click</button>
      </div>
    );
  }
}

export default ClassComponent;
