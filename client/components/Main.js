import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router';

class Main extends Component {
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Stacks</Link>
        </h1>

        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
}

export default Main;
