import React from 'react';

    // IMAGES
    import Logo from "../assets/images/logo.svg";
    import Mobile from "../assets/images/icon-menu.svg";

    // CSS
    import "./Header.css";

    // COMPONENTS
    import Cart from '../components/Cart';

function Header(props) {

  function openNav(){
    const navLinks = document.querySelector(".navbar .links-container");

    if(!navLinks.matches(".open")){
      navLinks.classList.add("open");
    } else{
      navLinks.classList.remove("open");
    }

  }


  return (
    <header>
      <div className='mobile-btn' onClick={openNav}>
        <img src={Mobile} alt="Mobile Icon" />
      </div>

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
            <div className='close-nav' onClick={openNav}>&times;</div>
        </div>

        <Cart
          name={props.name}
          price={props.price}
          quantity={props.quantity}
          image={props.image}
        />
      </nav>

    </header>
  )
}

export default Header;