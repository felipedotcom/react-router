import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from './components/NavBar.jsx'
import Home from './components/Home.jsx'
import Nutricao from './components/Nutricao.jsx'
import BemEstar from './components/BemEstar.jsx'
import Comportamento from './components/Comportamento.jsx'

function App() {
  return (

    <Router>
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='/nutricao'>
          <Nutricao />
        </Route>

        <Route path='/comportamento'>
          <Comportamento />
        </Route>

        <Route path='/bem-estar'>
          <BemEstar />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
