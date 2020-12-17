import React from 'react'
import { Route, Link, Switch, useRouteMatch } from 'react-router-dom'
import Higiene from './Higiene.jsx'
import Saude from './Saude.jsx'

const BemEstar = () => {
  const { path, url } = useRouteMatch()
  return (
    <>
   <ul>
     <li>
       <Link to={`${url}/higiene`}>Higiene</Link>
     </li>
     <li>
       <Link to={`${url}/saude`}>Saúde</Link>
     </li>
   </ul>

   <Switch>
      <Route path={`${path}/saude`}>
       <Saude />
     </Route>

     <Route path={`${path}/higiene`}>
       <Higiene />
     </Route>
    </Switch>
    
   </>
  )
}

export default BemEstar