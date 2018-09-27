import React, { Component } from 'react';

import NavBar from './NavBar';
import Footer from './Footer';

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
