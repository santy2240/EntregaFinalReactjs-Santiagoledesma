import React from "react";
import './NavBar.css';

import Logo from "../media/tazalogo.png";
import cupshop from "../media/cupshop.png";
import ArrowDown from "../media/Icon=ArrowDownW.svg";
import ArrowUp from "../media/Icon=ArrowUpW.svg";
import CartWidget from "./CartWidget/CartWidget";

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="header">
      <div className="logo-variant1">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <div className="headercupshop rotation">
          <img src={cupshop} alt="logo" />
        </div>
      </div>
      <nav className="navMobile">
        <input type="checkbox" id="navMobileShower" className="navMobileShower" />
        <label htmlFor="navMobileShower" className="navMobilePill">
          <img className="burgerAbrir" src={ArrowDown} alt="abrir menú" />
          <img className="burgerCerrar" src={ArrowUp} alt="cerrar menú" />
        </label>
        <ul className="ulMobile">
          <li><Link to="/category/tazas">tazas</Link></li>
          <li><Link to="/category/cuadros">cuadros</Link></li>
          <li><Link>sobre mí</Link></li>
          <li><Link>contacto</Link></li>
          <li><CartWidget /></li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
