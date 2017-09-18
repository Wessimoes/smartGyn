import React from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import { Card, CardText } from 'material-ui/Card';
import { Link } from 'react-router-dom'
import FloatingActionButtonComponent from '../components/FloatingActionButtonComponent'

export default class PanelRecords extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <Card>
                    <CardText>
                        <Table>
                            <TableHeader adjustForCheckbox={false} displaySelectAll={false} enableSelectAll={false}>
                                <TableRow displayRowCheckbox={false}>
                                    <TableHeaderColumn>N° da ficha</TableHeaderColumn>
                                    <TableHeaderColumn>Name</TableHeaderColumn>
                                    <TableHeaderColumn>Status</TableHeaderColumn>
                                </TableRow>
                            </TableHeader>
                            <TableBody displayRowCheckbox={false}>
                                <TableRow>
                                    <TableRowColumn>
                                        <Link to="/viewRecords">85671</Link>
                                    </TableRowColumn>
                                    <TableRowColumn>Jonny Bravo</TableRowColumn>
                                    <TableRowColumn>Ativo</TableRowColumn>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </CardText>
                </Card>

                <FloatingActionButtonComponent url="/addRecords"/>
            </div>
        );
    }
}