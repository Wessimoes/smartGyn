import React from 'react';
import { Table, TableHeader, TableHeaderColumn, TableRow } from 'material-ui/Table';
import { Card, CardText } from 'material-ui/Card';
import { BackComponent } from '../Back';
import TextField from 'material-ui/TextField';
import { Col4 } from '../Grid';
import { Row } from 'react-flexbox-grid';
import RaisedButton from 'material-ui/RaisedButton';

export default class AddRecords extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <Card>
                    <BackComponent />
                    <CardText>
                        <Row>
                            <Col4>
                                <TextField floatingLabelText="Nome"/>
                            </Col4>

                            <Col4>
                                <TextField floatingLabelText="Telefone"/>
                            </Col4>

                            <Col4>
                                <TextField floatingLabelText="Sexo"/>
                            </Col4>

                            <Col4>
                                <TextField floatingLabelText="Idade"/>
                            </Col4>

                            <Col4>
                                <TextField floatingLabelText="Data de Nascimento"/>
                            </Col4>

                            <Col4>
                                <TextField floatingLabelText="Tipo de treino"/>
                            </Col4>
                        </Row>

                        <RaisedButton style={{ marginTop: 5, float: "right" }} label="Novo treino" secondary={true}/>
                        <Card style={{ marginTop: 50 }}>
                            <CardText>
                                <Table>
                                    <TableHeader adjustForCheckbox={false} displaySelectAll={false}
                                                 enableSelectAll={false}>
                                        <TableRow>
                                            <TableHeaderColumn colSpan="3" style={{ textAlign: 'center' }}>
                                                Ficha de treinamento
                                            </TableHeaderColumn>
                                        </TableRow>
                                        <TableRow displayRowCheckbox={false}>
                                            <TableHeaderColumn>N° da ficha</TableHeaderColumn>
                                            <TableHeaderColumn>Name</TableHeaderColumn>
                                            <TableHeaderColumn>Tipo treino</TableHeaderColumn>
                                        </TableRow>
                                    </TableHeader>
                                </Table>
                            </CardText>
                        </Card>
                    </CardText>
                </Card>
            </div>
        );
    }
}