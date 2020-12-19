import React, { useEffect, useState } from 'react'
import { Route, Link, Switch, useRouteMatch, useParams } from 'react-router-dom'
import SubCategoria from './Subcategoria.jsx'
/* import axios from 'axios' */

const Categoria = () => {
  const { path, url } = useRouteMatch()
  const [subcategorias, setSubCategoria] = useState([])
  const { id } = useParams()

  useEffect(() => {
    const lerCategoria = async () => {

      const resposta = await fetch(`http://localhost:5000/categorias/${id}`)

      const sub = await resposta.json()

      setSubCategoria(sub.subcategorias)
    }
    lerCategoria()
  }, [])

  return (
    <>
      <ul>

        {subcategorias.map(categoria => {
          return (
            <li>
              <Link to={`${url}/${categoria}`}>{categoria}</Link>
            </li>
          )
        })}
      </ul>

      <Switch>
        <Route exact path={path}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, optio corrupti quisquam ex adipisci beatae alias deleniti dicta quod itaque cumque eaque laborum! Temporibus veniam voluptatem cum corrupti accusantium fugit.</p>
        </Route>
        <Route path={`${path}/:tag`}>
          <SubCategoria />
        </Route>


      </Switch>

  </>

  )
}

export default Categoria