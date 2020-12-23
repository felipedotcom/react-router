import React, { useEffect, useState } from 'react'
import { Route, Link, Switch, useRouteMatch, useParams } from 'react-router-dom'
import SubCategoria from './Subcategoria.jsx'
import { busca } from '../api/api'
import ListaPosts from './ListaPosts'

const Categoria = () => {
  const { path, url } = useRouteMatch()
  const [subcategorias, setSubCategorias] = useState([])
  const { id } = useParams()

  useEffect(() => {
    busca(`/categorias/${id}`, (categoria) => {
      setSubCategorias(categoria.subcategorias)
    })
  }, [id]) // precisa do id para o React atualizar o component

  return (
    <>
      <ul>
        {subcategorias.map((subcategoria) => (
          <li key={subcategoria}>
            <Link to={`${url}/${subcategoria}`}>{subcategoria}</Link>
          </li>
        ))}
      </ul>

      <Switch>
        <Route path={`${path}/:subcategoria`}>
          <SubCategoria />
        </Route>

        <Route exact path={`${path}/`}>
          <ListaPosts url={`/posts?categoria=${id}`} />
        </Route>
      </Switch>
    </>
  )
}

export default Categoria
