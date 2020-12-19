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


/* export default function QueryParamsExample() {
  return (
    <Router>
      <QueryParamsDemo />
    </Router>
  );
}

// A custom hook that builds on useLocation to parse
// the query string for you.
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function QueryParamsDemo() {
  let query = useQuery();

  return (
    <div>
      <div>
        <h2>Accounts</h2>
        <ul>
          <li>
            <Link to="/account?name=netflix">Netflix</Link>
          </li>
          <li>
            <Link to="/account?name=zillow-group">Zillow Group</Link>
          </li>
          <li>
            <Link to="/account?name=yahoo">Yahoo</Link>
          </li>
          <li>
            <Link to="/account?name=modus-create">Modus Create</Link>
          </li>
        </ul>

        <Child name={query.get("name")} />
      </div>
    </div>
  );
}

function Child({ name }) {
  return (
    <div>
      {name ? (
        <h3>
          The <code>name</code> in the query string is &quot;{name}
          &quot;
        </h3>
      ) : (
        <h3>There is no name in the query string</h3>
      )}
    </div>
  );
} */