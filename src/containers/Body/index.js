import React, { Component } from 'react';
import URL from '../../constants/URL';
import request from 'axios';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import NotFound from './NotFound';
import Resources from './Resources/index';

export default class Body extends Component {
  async componentDidMount() {
    const { data } = await request.get(`${URL}/vote`);
    console.log(data);
  }

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
