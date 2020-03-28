
import React from 'react';
import DashboardPage from '../components/DashboardPage';
import StoriesPage from '../components/StoriesPage';
import NotFoundPage from '../components/NotFoundPage';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history'; // needed to access history for non routed components

export const history = createBrowserHistory();

// Note: rendering header in PrivateRoute only
const AppRouter = () => (
   <Router history={history}>
      <div>
         <Switch> {/* Only the first comp with a matching path to current URL will be rendererd */}         
            <Route path="/dashboard" component={DashboardPage} exact={true}/> 
            <Route path="/stories" component={StoriesPage}/> 
            <Route component={NotFoundPage}/>
         </Switch>
      </div>
   </Router>
);

export default AppRouter;