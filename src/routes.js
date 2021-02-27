import React from 'react';
import { Route, Switch } from 'react-router';

// Pages
import Dashboard from './pages/Dashboard';

// Layouts
import MainLayout from './components/Layout/MainLayout';

export default (
  <Switch>
    <Route>
      <MainLayout>    
        <Switch>
          <Route exact path="/" component={Dashboard} />
        </Switch>
      </MainLayout>
    </Route>
  </Switch>
);