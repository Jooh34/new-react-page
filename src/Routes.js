import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { HomePage, AboutPage, PostListPage, PostDetailPage } from './components/page';
import Base from './components/base/Base';

class Routes extends Component {
  render() {
    return (
      <Router key={Math.random()}>
        <Base>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/about" component={AboutPage}/>
            <Switch>
                <Route path="/post/:post_id" component={PostDetailPage}/>
                <Route path="/post" component={PostListPage}/>
            </Switch>
          </Switch>
        </Base>
      </Router>
    );
  }
}

export default Routes;
