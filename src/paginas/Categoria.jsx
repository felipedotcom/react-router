import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Route, Link, Switch, useRouteMatch, useParams } from 'react-router-dom'
import SubCategoria from './Subcategoria.jsx'
import axios from 'axios'

const Categoria = () => {
  const { path, url } = useRouteMatch()
  const [subcategorias, setSubCategorias] = useState([])
  const { id } = useParams()

  const lerCategoria = async () => {
    const resposta = await axios.get(`http://localhost:5000/categorias/${id}`)
    const categoria = await resposta.data
    setSubCategorias(categoria.subcategorias)
  }

  useEffect(() => {
    lerCategoria()
  }, [])

  return (
    <>
      <ul>
        {subcategorias.map((subcategoria) => {
          return (
            <li>
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
