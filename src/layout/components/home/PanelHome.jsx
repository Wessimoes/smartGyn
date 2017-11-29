import React from 'react';
import { Row } from 'react-flexbox-grid';
import {Card, CardTitle, CardText} from 'material-ui/Card';
import { Col12 } from '../ui/Grid';

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
                            <CardTitle title="Smart Gym" subtitle="Sistema de gestão de fichas" />
                            <CardText>
                                Área administrativa do sistema, para a gestão das fichas dos alunos..
                            </CardText>
                        </Card>
                    </Col12>
                </Row>
            </div>
        );
    }
}
