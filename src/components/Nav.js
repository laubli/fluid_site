import { BrowserRouter as Router, Route, Routes, Link, NavLink } from 'react-router-dom';
import React, { Suspense, useState } from 'react';
import logo from '../assets/images/logo.png';


function Nav() {
  return (
      <nav>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <NavLink activeClassName="active">Deck</NavLink>
            <ul className="submenu">
              <li><NavLink to="/deck/guerrier" activeClassName="active">Guerrier</NavLink></li>
              <li><NavLink to="/deck/dragon" activeClassName="active">Dragon</NavLink></li>
            </ul>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
        </ul>
      </nav>

     
  );
}

export default Nav;
