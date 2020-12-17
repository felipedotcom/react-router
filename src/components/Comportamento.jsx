import React from 'react'
import { Route, Link, Switch, useRouteMatch } from 'react-router-dom'
import Treinamento from './Treinamento.jsx'
import Educacao from './Educacao.jsx'

const Comportamento = () => {
  const { path, url } = useRouteMatch()
  return (
    <>
   <ul>
     <li>
       <Link to={`${url}/treinamentos`}>Treinamentos</Link>
     </li>
     <li>
       <Link to={`${url}/educacao`}>Educacao</Link>
     </li>
   </ul>

   <Switch>
      <Route path={`${path}/educacao`}>
       <Educacao />
     </Route>

     <Route path={`${path}/treinamentos`}>
       <Treinamento />
     </Route>
    </Switch>
    
   </>
  )
}

export default Comportamento