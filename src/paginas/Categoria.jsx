import React, { useEffect, useState } from 'react'
import { Route, Link, Switch, useRouteMatch, useParams } from 'react-router-dom'
import SubCategoria from './Subcategoria.jsx'
import { busca } from '../api/api'

const Categoria = () => {
  const { path, url } = useRouteMatch()
  const [subcategorias, setSubCategorias] = useState([])
  const { id } = useParams()

  const [posts, setPosts] = useState([])

  useEffect(() => {
    busca(`/categorias/${id}`, (categoria) => {
      setSubCategorias(categoria.subcategorias)
    })
  }, [id]) // precisa do id para o React atualizar o component

  useEffect(() => {
    busca(`/posts?categoria=${id}`, setPosts)
  }, [id])

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
      </Switch>

      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.metadescription}</p>
            <Link to={`/posts/${post.id}`}>Leia Mais...</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Categoria
