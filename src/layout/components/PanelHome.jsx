import React from 'react';
import { Row } from 'react-flexbox-grid';
import {Card, CardTitle, CardText} from 'material-ui/Card';
import { Col12 } from './Grid';

export default class PanelHome extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <Row>
                    <Col12>
                        <Card style={{marginBottom: 8}}>
                            <CardTitle title="Smart Gym" subtitle="slogan massa qui" />
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                                Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                            </CardText>
                        </Card>
                    </Col12>
                </Row>
            </div>
        );
    }
}