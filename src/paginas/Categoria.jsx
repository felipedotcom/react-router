import React, { useEffect, useState } from 'react'
import { Route, Link, Switch, useRouteMatch, useParams } from 'react-router-dom'
import SubCategoria from './Subcategoria.jsx'
import { busca } from '../api/api'

const Categoria = () => {
  const { path, url } = useRouteMatch()
  const [subcategorias, setSubCategorias] = useState([])
  const { id } = useParams()


  useEffect(() => {
    busca(`/categorias/${id}`, (categoria) => {
      setSubCategorias(categoria.subcategorias)
    })
  }, [])

  return (
    <>
      <ul>
        {subcategorias.map((subcategoria) => {
          return (
            <li key={subcategoria}>
              <Link to={`${url}/${subcategoria}`}>{subcategoria}</Link>
            </li>
          )
        })}
      </ul>

      <Switch>
        <Route path={`${path}/:tag`}>
          <SubCategoria />
        </Route>
      </Switch>
    </>
  )
}

export default Categoria
