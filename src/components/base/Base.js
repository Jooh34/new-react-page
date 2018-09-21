import React, { Component } from 'react';

import NavBar from './NavBar';

class Base extends Component{
  render() {
    return (
      <div>
        <NavBar>
          {this.props.children}
        </NavBar>
      </div>
    )
  }
}

export default Base;
