import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import PanelHome from '../layout/components/PanelHome'
import PanelRecords from '../layout/components/PanelRecords'
import ViewRecords from '../layout/components/Records/ViewRecords'
import AddRecords from '../layout/components/Records/AddRecords'
import Layout from '../layout/Layout'

const renderizarComLayoutPadrao = (Componente) => (props) => {
    const elemento = (<Componente params={props.match.params} router={props} />);

    return (
        <Layout>
            {elemento}
        </Layout>
    );
};

export const Rotas = () => (
    <Router>
        <div>
            <Route exact path="/" component={renderizarComLayoutPadrao(PanelHome)}/>
            <Route path="/records" component={renderizarComLayoutPadrao(PanelRecords)}/>
            <Route path="/addRecords" component={renderizarComLayoutPadrao(AddRecords)}/>
            <Route path="/viewRecords" component={renderizarComLayoutPadrao(ViewRecords)}/>
        </div>
    </Router>
);