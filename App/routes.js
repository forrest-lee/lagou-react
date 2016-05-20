import React from 'react';
import { Route, Redirect, IndexRoute} from 'react-router';

import MenuPage from './components/MenuPage';
import Position from './components/Position';
import Keywords from './components/Keywords';

const AppRoutes = (
    <Route path="/" component={MenuPage}>
        <IndexRoute component={MenuPage} />
        <Route path="position" component={Position} />
        <Route path='keywords' component={Keywords} />
    </Route>
);

export default AppRoutes;
