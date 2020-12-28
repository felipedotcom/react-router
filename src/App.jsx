import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Cabecalho from './components/Cabecalho.jsx'
import Home from './paginas/Home.jsx'
import Sobre from './paginas/Sobre.jsx'
import Categoria from './paginas/Categoria.jsx'
import Post from './paginas/Post.jsx'
import Pagina404 from './paginas/Pagina404.jsx'

import './assets/css/base/base.css'

function App() {
  return (
    <Router>
      <Cabecalho />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/sobre">
          <Sobre />
        </Route>

        <Route path="/categoria/:id">
          <Categoria />
        </Route>

        <Route path="/posts/:id">
          <Post />
        </Route>

        <Route>
          <Pagina404 />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
