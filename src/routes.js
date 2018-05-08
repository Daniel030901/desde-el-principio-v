import React from 'react';
import {Route,Switch} from 'react-router-dom';
import navbar from './componentes/navbar/navbar';

export const Routes = () => (
<Switch>
     <Route exact path="/" component={navbar}/>
</Switch>
);

 export default Routes;
