import React, { Component } from 'react';
import Poll from './Poll';

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
        <div style={{ width: '80%' }}>
          <Poll />
        </div>
      </div>
    );
  }
}
