import React from 'react';

import "../components/Cart";

// CSS
import "./ProductSection.css";

// IMAGES
import Minus from "../assets/images/icon-minus.svg";
import Plus from "../assets/images/icon-plus.svg";
import Product1 from "../assets/images/image-product-1.jpg";
import Product2 from "../assets/images/image-product-2.jpg";
import Product3 from "../assets/images/image-product-3.jpg";
import Product4 from "../assets/images/image-product-4.jpg";
import Thumb1 from "../assets/images/image-product-1-thumbnail.jpg";
import Thumb2 from "../assets/images/image-product-2-thumbnail.jpg";
import Thumb3 from "../assets/images/image-product-3-thumbnail.jpg";
import Thumb4 from "../assets/images/image-product-4-thumbnail.jpg";


function ProductSection() {
  return (
    <>
        <section className='product'>
            <div className="images-container">
                <img src={Product1} alt="" className='product-image' />
                <div className='thumbs-container'>
                    <img src={Thumb1} alt="" />
                    <img src={Thumb2} alt="" />
                    <img src={Thumb3} alt="" />
                    <img src={Thumb4} alt="" />
                </div>
            </div>

            <div className="description-container">
                <small className='aside-title'>SNEAKER COMPANY</small>
                <h2 className='title'>Fall Limited Edition Sneakers</h2>
                <p className='description'>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
                <p className='price'>$125.00</p>
                <small className='real-value'>$250.00</small>

                <div className='quantity'>
                    <form action="">
                        <button className='minus-btn'>
                        <img src={Minus} alt="Icon Minus" />
                        </button>
                        <input type="number" min={0} max={999} />
                        <button className='plus-btn'>
                        <img src={Plus} alt="Icon Plus" />
                        </button>

                        <button type='submit'>Add to Cart</button>
                    </form>
                </div>
            </div>
        </section>
    </>
  )
}

export default ProductSection;