import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom'
import Paper from 'material-ui/Paper';

const stylePaperDrawer = {
    height: 200,
    width: '100%',
    margin: 0,
    display: 'inline-block',
    backgroundImage: `url(./blackmaterial.jpg)`,
    alignItems: 'center',
    overflowX: 'hidden',
};

export default class SideMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: this.props.state,
        }
    }

    handleClose = () => this.setState({open: !this.props.state});

    render() {
        return (
            <div>
                <Drawer
                    docked={false}
                    width={250}
                    open={this.props.state}
                    onRequestChange={this.props.onRequestChange}
                >
                    <Paper style={stylePaperDrawer} zDepth={1} rounded={false}/>
                    <Link to="/">
                        <MenuItem onClick={this.handleClose}>Início</MenuItem>
                    </Link>
                    <Link to="/gymmer">
                        <MenuItem onClick={this.handleClose}>Adicionar Gymmer</MenuItem>
                    </Link>
                    <Link to="/records">
                        <MenuItem onClick={this.handleClose}>Adicionar Fichas</MenuItem>
                    </Link>
                </Drawer>
            </div>
        );
    }
}