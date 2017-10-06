import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import PanelHome from '../layout/components/home/PanelHome'
import PanelRecords from '../layout/components/record/PanelRecords'
import ViewRecords from '../layout/components/record/ViewRecords'
import AddRecords from '../layout/components/record/AddRecords'

import PanelGymmer from '../layout/components/gymmer/PanelGymmer'
import ViewGymmer from '../layout/components/gymmer/ViewGymmer'
import AddGymmer from '../layout/components/gymmer/AddGymmer'
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

            <Route path="/gymmer" component={renderizarComLayoutPadrao(PanelGymmer)}/>
            <Route path="/addGymmer" component={renderizarComLayoutPadrao(AddGymmer)}/>
            <Route path="/viewGymmer" component={renderizarComLayoutPadrao(ViewGymmer)}/>
        </div>
    </Router>
);