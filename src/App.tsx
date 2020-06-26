import React from 'react';

import './App.css';
import { Header } from './components/Header';
import { Switch, Route, Redirect } from 'react-router-dom';
import { MasterClasses } from './MasterClasses';
import { Welcome } from './Welcome';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route path="/masterclasses">
            <MasterClasses />
          </Route>
          <Route path="/">
            <Welcome />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </div>
  );
};

export default App;
