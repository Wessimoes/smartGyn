import React from 'react';
import AppBar from 'material-ui/AppBar';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import '../../layout/base/components/Back.css';
import { black } from 'material-ui/styles/colors';

export const BackComponent = props =>
    <AppBar
        className="appbarInterno"
        title='Voltar'
        zDepth={0}
        iconElementLeft={<IconButton>
            <FontIcon className="material-icons" color={black}>arrow_back</FontIcon>
        </IconButton>}
        onLeftIconButtonTouchTap={() => window.history.back()}
    />;
