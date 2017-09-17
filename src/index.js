import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './layout/Layout';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './layout/base/index.scss';

const Theme = () => (
  <MuiThemeProvider>
      <Layout />
  </MuiThemeProvider>
);


ReactDOM.render(<Theme />, document.getElementById('root'));
registerServiceWorker();
