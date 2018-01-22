import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import NotFound from './NotFound';
import Resources from './Resources/index';

export default class Body extends Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'center'
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/resources" component={Resources} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}
