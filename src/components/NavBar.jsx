import React from 'react'
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <NavLink to="/">Logo Doguito</NavLink>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName='selectedPage'to="/">Home</NavLink>
          </li>
          <li>
            <NavLink activeClassName='selectedPage' to="/nutricao">Nutricao</NavLink>
          </li>
          <li>
            <NavLink activeClassName='selectedPage'
            to="/bem-estar">Bem Estar</NavLink>
          </li>
          <li>
            <NavLink activeClassName='selectedPage'to="/comportamento">Comportamento</NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default NavBar