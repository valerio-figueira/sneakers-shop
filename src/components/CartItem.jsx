import React from 'react'

    // IMAGES
    import DeleteIcon from "../assets/images/icon-delete.svg";

function CartItem({id, name, price, quantity, image, deleteItem, totalPerItem}) {
  return (
    <div className='cart-box' key={id}>
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
  )
}

export default CartItem;