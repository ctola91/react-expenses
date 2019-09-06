import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './modules/App';
import Home from './modules/Home/Home';
import About from './modules/About/About';
import Error404 from './modules/Error/404';

const AppRoutes = () => (
  <App>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} exact />

      <Error404 component={Error404} />
    </Switch>
  </App>
);

export default AppRoutes;
