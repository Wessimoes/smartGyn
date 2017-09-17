import React, { Component } from 'react';
import '../layout/base/Layout.scss';
import RaisedButton from 'material-ui/RaisedButton';

class Layout extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <RaisedButton label="Default" />
        </p>
      </div>
    );
  }
}

export default Layout;
