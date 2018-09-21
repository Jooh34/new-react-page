import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { HomePage, AboutPage, PostListPage } from './components/pages';
import Base from './components/base/Base';

class Routes extends Component {
  render() {
    return (
      <Router key={Math.random()}>
        <div>
          <Base>
            <Switch>
              <Route exact path="/" component={HomePage}/>
              <Route path="/about" component={AboutPage}/>
              <Route path="/post" component={PostListPage}/>
            </Switch>
          </Base>
        </div>
      </Router>
    );
  }
}
export default Routes;
