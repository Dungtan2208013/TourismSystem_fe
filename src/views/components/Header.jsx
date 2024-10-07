import React from 'react';
import 'public/customer/fontawesome/css/all.min.css'; // Import FontAwesome CSS
import '../../assets/customers/sass/_about.scss'; // Import Sass
import '../../assets/customers/sass/_header.scss'; // Import CSS/Sass riêng nếu có


const Header = () => {
    return (
        <header>
            <div className="main_menu">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container">
                        <a className="navbar-brand" href="/"> <img src="img/logo.png" alt="logo" /> </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav align-items-center">
                                <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
                                <li className="nav-item"><a className="nav-link" href="/about">About</a></li>
                                <li className="nav-item"><a className="nav-link" href="#">Services</a></li>
                                <li className="nav-item"><a className="nav-link" href="/blog">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;
