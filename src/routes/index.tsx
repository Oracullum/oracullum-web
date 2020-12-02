import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from '../pages/Landing';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import LayoutNavigation from '../pages/_layouts/layout/LayoutNavigation';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/login" component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/dashboard" component={LayoutNavigation} />
      <Route path="/profile" component={LayoutNavigation} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
