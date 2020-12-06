import React from 'react';
import { Router, Switch } from 'react-router-dom';
import Route from './Route';

import Landing from '../pages/Landing';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import history from '../services/history';

import LayoutNavigation from '../pages/_layouts/layout/LayoutNavigation';

const Routes: React.FC = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/login" component={SignIn} />
        <Route path="/register" component={SignUp} />

        <Route path="/dashboard" component={LayoutNavigation} isPrivate />
      </Switch>
    </Router>
  );
};

export default Routes;
