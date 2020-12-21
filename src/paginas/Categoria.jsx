import React, { useEffect, useState } from 'react'
import { Route, Link, Switch, useRouteMatch, useParams } from 'react-router-dom'
import SubCategoria from './Subcategoria.jsx'


const Categoria = () => {
  const { path, url } = useRouteMatch()
  const [subcategorias, setSubCategoria] = useState([])
  const { id } = useParams()

  useEffect(() => {
    const lerCategoria = async () => {
      
      const resposta = await fetch(`http://localhost:5000/categorias/${id}`)
      const categoria = await resposta.json()
      setSubCategoria(categoria.subcategorias)

    }
    lerCategoria()
  }, [])

  return (
    <>
      <ul>

        {subcategorias.map(subcategoria => {
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