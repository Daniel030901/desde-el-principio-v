import React from 'react';
import {Route,Switch} from 'react-router-dom';
import navbar from './componentes/navbar/navbar';
import home from './componentes/home/home';
import footer from './componentes/footer/footer';
export const Routes = () => (
<Switch>
     <Route exact path="/" component={home}/>
//     <Route exact path="/navbar" component={navbar}/>

</Switch>
);

 export default Routes;
