import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from './img/logo.png';

function Header() {
    return (
        <header className="header">
            <nav>
                <Link to="/home" className='item'>
                <div className="nav_logo-text">
                    <img src={logo} alt="" className="logo-nav" />
                    <p className="text-logo-header">Mil <br /> huellitas</p>
                </div>
                </Link>
                

                <input type="checkbox" id="check" />
                <label htmlFor="check" className="bar-btn">
                    <i className="fa-solid fa-bars"></i>
                </label>

                <ul className="nav_menu-items">
                    <li><Link to="/home" className='item'>INICIO</Link></li>
                    <li><Link to="/adopcion" className='item'>ADOPCIÓN</Link></li>
                    <li><Link to="/donacion" className='item'>DONACIÓN</Link></li>
                    <li><Link to="/blog" className='item'>BLOG</Link></li>
                    <li><Link to="/aliados" className='item'>ALIADOS</Link></li>
                    <li><Link to="/formulario" className='item'>FormularioLogin</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header