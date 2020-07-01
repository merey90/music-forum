import React from 'react';

import { Header } from '../Header';
import { Switch, Redirect } from 'react-router-dom';
import { Routes, Routing, HomeRoute } from '../Routing';

export const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          {Routes.map(Routing)}
          <Redirect to={HomeRoute.path} />
        </Switch>
      </main>
    </div>
  );
};
