import React from 'react';
import { render } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import baseTheme from './layout/css/baseThemes/materialTheme';
import getMuiTheme from './layout/css/baseThemes/myTheme';
import { Rotas } from './route/routes';
import './layout/css/index.css';

render(
    (
        <MuiThemeProvider muiTheme={getMuiTheme(baseTheme)}>
            <Rotas />
        </MuiThemeProvider>
    ),
    document.getElementById('root'),
);

registerServiceWorker();
