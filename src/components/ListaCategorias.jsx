import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { ApiContext } from '../context/ApiContext'

const ListaCategorias = () => {
  const [categorias, setCategorias] = useState([])
  const { busca } = useContext(ApiContext)

  useEffect(() => {
    busca('/categorias', setCategorias)
  }, [])
  return (
    <ul className="lista-categorias container flex">
      {categorias.map((categoria) => (
        <Link to={`/categoria/${categoria.id}`}>
          <li
            className={`lista-categorias__categoria lista-categorias__categoria--${categoria.id}`}
          >
            {categoria.nome}
          </li>
        </Link>
      ))}
    </ul>
  )
}

export default ListaCategorias
