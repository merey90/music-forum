import React from 'react';

import './App.css';
import { Header } from './components/Header';
import { Switch, Redirect } from 'react-router-dom';
import { Routes, Routing, HomeRoute } from './components/Routing';

const App: React.FC = () => {
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

export default App;
