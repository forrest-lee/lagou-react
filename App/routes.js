import React from 'react';
import { Route, Redirect, IndexRoute} from 'react-router';
import IndexPage from './components/IndexPage';

const AppRoutes = ( 
    <Route path="/" component={IndexPage}>
        <IndexRoute component={IndexPage} />
        <Route path="index" component={IndexPage} />
    </Route>
);

export default AppRoutes;
