import React from 'react'
import { Link } from 'react-router-dom'

const Pagina404 = () => {
  return (
    <div>
      <p>Ops, essa página não existe</p>
      <Link to="/">Volte para a página inicial</Link>
    </div>
  )
}

export default Pagina404
