import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from './components/NavBar.jsx'
import Home from './paginas/Home.jsx'
import Categoria from './paginas/Categoria.jsx';
import Post from './paginas/Post.jsx'
import Pagina404 from './paginas/Pagina404.jsx';

function App() {
  return (

    <Router>
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='/categoria/:id'>
          <Categoria />
        </Route>

        <Route path='/posts/:id'>
          <Post />
        </Route>
    
        <Route>
          <Pagina404 />
        </Route>
  
      </Switch>
    </Router>

  );
}

export default App;
