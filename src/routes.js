import React from 'react';
import {Route,Switch} from 'react-router-dom';
import navbar from './componentes/navbar/navbar';
import home from './componentes/home/home';

export const Routes = () => (
<Switch>
     <Route exact path="/navbar" component={navbar}/>
     <Route exact path="/home" component={home}/>
</Switch>
);

 export default Routes;
