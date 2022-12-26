import React, { useEffect, useState } from 'react';

    // IMAGES
    import CartIcon from "../assets/images/icon-cart.svg";
    import ProfilePhoto from "../assets/images/image-avatar.png";
    import DeleteIcon from "../assets/images/icon-delete.svg";


function Cart({name, price, quantity, image}) {
  const [totalPerItem, setTotalPerItem] = useState();
  const [cartItems, setCartItems] = useState([]);

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

    if(name && price && quantity && image && totalPerItem){

      if(cartItems.length == 0){
        setCartItems([{
          name,
          price,
          image,
          quantity,
          totalPerItem,
        }]);
      } else {

        const newObject = {
          name,
          price,
          image,
          quantity,
          totalPerItem,
        };

        if(!searchForMatch(newObject)){
          setCartItems(actualItem => [...actualItem, {
            name,
            price,
            image,
            quantity,
            totalPerItem,
          }]);
        } else{
          cartItems.findIndex(item => item.name)
        }
        
      }

      console.log(cartItems)
    }

  }, [name, price, quantity, image])


  function deleteItem(){
    document.querySelector(".cart-box")
    .innerHTML = "";
  }


  function searchForMatch(newObject){

    for(let item of cartItems){
      if(item.name.match(newObject.name)){

        return true;
      }
    }

    return false;
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
          {cartItems ? (
              cartItems.map((item, i) => (
                <div className='cart-box' key={i}>
                    <img src={item.image} alt="Product" />
                    <div className="item-description">
                        <p className='name'>{item.name}</p>
                        <p className='price'>
                            ${item.price}
                            <span className='item-quantity'> x {item.quantity}</span>
                            <span className='total-price'>${item.totalPerItem}</span>
                        </p>
                    </div>
                    <img src={DeleteIcon} className="delete-icon" alt="Delete Icon" onClick={deleteItem} />
                </div>
              ))
          ) : (
            <div className="cart-box">
              <p className='empty'>Your Cart is empty</p>
            </div>
          )}
          <button className='checkout'>Checkout</button>
        </div>

    </>
  )
}

export default Cart;

/*

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

*/