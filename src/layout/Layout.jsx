import React, { Component } from 'react';
import Header from './components/ui/Header';
import SideMenu from './components/ui/SideMenu';
import './css/Layout.css';

class Layout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            drawerOpen: false,
        };

    }

    handleToggle = () => this.setState({ drawerOpen: !this.state.drawerOpen });

    render() {
        return (
            <div className="teste">
                <Header handleToggle={this.handleToggle}/>
                <SideMenu
                    state={this.state.drawerOpen}
                    onRequestChange={drawerOpen => this.setState({ drawerOpen })}
                />
                <div className="marginTopster">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Layout;
