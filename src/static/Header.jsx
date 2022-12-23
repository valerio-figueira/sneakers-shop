import React from 'react';

    // IMAGES
    import Logo from "../assets/images/logo.svg";

    // CSS
    import "./Header.css";

    // COMPONENTS
    import Cart from '../components/Cart';

function Header() {
  return (
    <header>
      <a href="#Home" className='logo'>
        <img src={Logo} alt="Logo" />
      </a>

      <nav className="navbar">
        <div className="links-container">
            <a href="#Collections">Collections</a>
            <a href="#Men">Men</a>
            <a href="#Women">Women</a>
            <a href="#About">About</a>
            <a href="#Contact">Contact</a>
        </div>

        <Cart />
      </nav>

    </header>
  )
}

export default Header;