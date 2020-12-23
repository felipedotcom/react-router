import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <NavLink to="/">Logo Doguito</NavLink>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName="selectedPage" to="/categoria/bem-estar">
              Bem Estar
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="selectedPage"
              to="/categoria/comportamento"
            >
              Comportamento
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="selectedPage" to="/sobre">
              Sobre
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default NavBar
