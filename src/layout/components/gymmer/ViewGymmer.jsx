import React from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import { Card, CardText } from 'material-ui/Card';
import { BackComponent } from '../ui/Back';
import { Col4 } from '../ui/Grid';
import { Row } from 'react-flexbox-grid';
import RaisedButton from 'material-ui/RaisedButton';
import { TextFieldReadOnly } from '../ui/TextFieldReadOnly';

export default class ViewRecords extends React.Component {

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
                                <TextFieldReadOnly rotulo="Nome" valor="Jonny Bravo"/>
                            </Col4>

                            <Col4>
                                <TextFieldReadOnly rotulo="Telefone" valor="(31) 9 7582-9703"/>
                            </Col4>

                            <Col4>
                                <TextFieldReadOnly rotulo="Sexo" valor="Masculino"/>
                            </Col4>

                            <Col4>
                                <TextFieldReadOnly rotulo="Idade" valor="25"/>
                            </Col4>

                            <Col4>
                                <TextFieldReadOnly rotulo="Data de nascimento" valor="25/04/1989"/>
                            </Col4>

                            <Col4>
                                <TextFieldReadOnly rotulo="Tipo de treino" valor="Fisioculturismo"/>
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
                                            <TableHeaderColumn>Status</TableHeaderColumn>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody displayRowCheckbox={false}>
                                        <TableRow>
                                            <TableRowColumn>1</TableRowColumn>
                                            <TableRowColumn>Jonny Bravo</TableRowColumn>
                                            <TableRowColumn>Ativo</TableRowColumn>
                                        </TableRow>
                                        <TableRow>
                                            <TableRowColumn>1</TableRowColumn>
                                            <TableRowColumn>Jonny Bravo</TableRowColumn>
                                            <TableRowColumn>Ativo</TableRowColumn>
                                        </TableRow>
                                        <TableRow>
                                            <TableRowColumn>1</TableRowColumn>
                                            <TableRowColumn>Jonny Bravo</TableRowColumn>
                                            <TableRowColumn>Ativo</TableRowColumn>
                                        </TableRow>
                                        <TableRow>
                                            <TableRowColumn>1</TableRowColumn>
                                            <TableRowColumn>Jonny Bravo</TableRowColumn>
                                            <TableRowColumn>Ativo</TableRowColumn>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </CardText>
                        </Card>
                    </CardText>
                </Card>
            </div>
        );
    }
}