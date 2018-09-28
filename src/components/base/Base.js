import React, { Component } from 'react';

import { NavBar, Footer } from './index.js';

class Base extends Component{
  render() {
    return (
      <div>
        <NavBar>
          {this.props.children}
          <Footer />
        </NavBar>
      </div>
    )
  }
}

export default Base;
