import React from 'react';

    // IMAGES
    import CartIcon from "../assets/images/icon-cart.svg";
    import ProfilePhoto from "../assets/images/image-avatar.png";

function Cart() {
  return (
    <div className='profile-container'>
        <button className='cart-btn'>
            <img src={CartIcon} alt="Cart Icon" />
        </button>
        
        <div className="profile">
            <img src={ProfilePhoto} alt="Photo of a Man" />
        </div>
    </div>
  )
}

export default Cart;