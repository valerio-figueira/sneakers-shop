import React, { useEffect, useState } from 'react';

    // IMAGES
    import CartIcon from "../assets/images/icon-cart.svg";
    import ProfilePhoto from "../assets/images/image-avatar.png";
    import DeleteIcon from "../assets/images/icon-delete.svg";

    // COMPONENTS
    import CartItem from './CartItem';

function Cart({name, price, quantity, image}) {
  const [totalPerItem, setTotalPerItem] = useState();

  function openCart(){
    const cart = document.querySelector(".cart");
    
    if(cart.matches(".open")){
      cart.classList.remove("open")
    } else{
      cart.classList.add("open")
    }

  }

  useEffect(() => {
    setTotalPerItem(quantity * price)

    console.log(name, price, quantity, image)

  }, [name, price, quantity, image])


  function deleteItem(){
    document.querySelector(".cart-box")
    .innerHTML = "";
  }

  


  return (
    <>
        <div className='profile-container'>
            <button className='cart-btn' onClick={() => openCart()}>
                <img src={CartIcon} alt="Cart Icon" />
            </button>
            
            <div className="profile">
                <img src={ProfilePhoto} alt="Photo of a Man" />
            </div>
        </div>

        <div className="cart">
          <h3 className='title'>Cart</h3>
          {name && price && quantity && image ? (
            <div className="cart-box">
                <img src={image} alt="Product" />
                <div className="item-description">
                    <p className='name'>{name}</p>
                    <p className='price'>
                        ${price}
                        <span className='item-quantity'> x {quantity}</span>
                        <span className='total-price'>${totalPerItem}</span>
                    </p>
                </div>
                <img src={DeleteIcon} className="delete-icon" alt="Delete Icon" onClick={deleteItem} />
            </div>
          ) : (
            <div className="cart-box">
              
            </div>
          )}
          <button className='checkout'>Checkout</button>
        </div>

    </>
  )
}

export default Cart;