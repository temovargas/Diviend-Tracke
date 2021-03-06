import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import './Nav.css'

const Nav = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className="nav nav_container">
      <label
        htmlFor="nav__menu"
        className="nav__toggle"
        onClick={() => setToggle(!toggle)}
      >
        <span className="nav__menu__bar"></span>
        <span className="nav__menu__bar"></span>
        <span className="nav__menu__bar"></span>
      </label>
      <NavLink className="nav__heading nav__item--left " to="/">
        <h1>Dividend</h1>
      </NavLink>

      <ul
        className={`nav__wrapper ${toggle ? 'toggle_nav' : null}`}
        onClick={() => setToggle(false)}
      >
        <li className="nav__item ">
          <NavLink
            className="nav__link"
            exact
            activeClassName="is-active"
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            className="nav__link"
            activeClassName="is-active"
            to="/stocksearch"
          >
            Search Sotck
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            className="nav__link"
            activeClassName="is-active"
            to="/about"
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
