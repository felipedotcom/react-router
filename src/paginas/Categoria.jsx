import React, { useEffect, useState } from 'react'
import { Route, Link, Switch, useRouteMatch, useParams } from 'react-router-dom'
import SubCategoria from './Subcategoria.jsx'
import { busca } from '../api/api'
import ListaPosts from '../components/ListaPosts'

import '../assets/css/blog.css'

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
      <ul className="lista-categorias container flex">
        {subcategorias.map((subcategoria) => (
          <li className="lista-categoriascategoria lista-categoriascategoria--bemestar" key={subcategoria}>
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
