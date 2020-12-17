import React from 'react'
import { Route, Link, Switch, useRouteMatch } from 'react-router-dom'
import Receita from './Receita.jsx'
import Dieta from './Dieta.jsx'

const Nutricao = () => {
  const { path, url } = useRouteMatch()
  return (
    <>
   <ul>
     <li>
       <Link to={`${url}/dietas`}>Dieta</Link>
     </li>
     <li>
       <Link to={`${url}/receitas`}>Receitas</Link>
     </li>
   </ul>

   <Switch>
      <Route path={`${path}/dietas`}>
       <Dieta />
     </Route>

     <Route path={`${path}/receitas`}>
       <Receita />
     </Route>
    </Switch>
    
   </>
  )
}

export default Nutricao