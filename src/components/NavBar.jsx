import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light colorCosmicLatte">
            <div className="container-fluid"> 
                <a className="navbar-brand" href="#">Las Moras</a>
                <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Productos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Sobre Nosotros</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Locales</a>
                        </li>
                    </ul>
                    <div className="ml-auto">
                        <CartWidget />
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
