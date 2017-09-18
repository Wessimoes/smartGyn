import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { Link } from 'react-router-dom';


export default class FloatingActionButtonComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Link to={this.props.url}>
                <FloatingActionButton
                    secondary
                    style={{
                        position: "fixed",
                        bottom: "20px",
                        top: 'auto',
                        right: '20px',
                        left: 'auto'
                    }}>
                    <ContentAdd/>
                </FloatingActionButton>
            </Link>
        );
    }
}