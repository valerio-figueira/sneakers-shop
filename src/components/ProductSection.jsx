import React, { useEffect, useState } from 'react';

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
import PrevBtn from "../assets/images/icon-previous.svg";
import NextBtn from "../assets/images/icon-next.svg";


function ProductSection({name, price, quantity, image}) {
    const [qtValue, setQtValue] = useState(1);
    const [plus, setPlus] = useState(1);
    const [imageIndex, setImageIndex] = useState(1);

    useEffect(() => {
        function changeImage(){
            const thumbs = document.querySelectorAll(".thumbs-container img");

            const picture = document.querySelector(".product-image");
    
            thumbs.forEach(thumb => {
                thumb.addEventListener('click', (e) => {
                    if(e.target.id.match("1")){
                        picture.src = Product1;
                    } else if(e.target.id.match("2")){
                        picture.src = Product2;
                    } else if(e.target.id.match("3")){
                        picture.src = Product3;
                    } else if(e.target.id.match("4")){
                        picture.src = Product4;
                    }
                })
            })
        }
        changeImage();

    }, []);

    useEffect(() => {
        if(plus < 1 ){
            setPlus(1);
        } else if(plus > 9999){
            setPlus(9999)
        } else{
            setQtValue(plus);
        }

    }, [plus, qtValue]);


    useEffect(() => {
        if(imageIndex <= 0){
            setImageIndex(4)
        } else if(imageIndex > 4){
            setImageIndex(1)
        }

        const picture = document.querySelector(".product-image");

        if(imageIndex == 1){
            picture.src = Product1;
        } else if(imageIndex == 2){
            picture.src = Product2;
        } else if(imageIndex == 3){
            picture.src = Product3;
        } else if(imageIndex == 4){
            picture.src = Product4;
        }
    }, [imageIndex])


    function setCart(e){
        e.preventDefault();

        price(Number(document.querySelector(".product .price-number").innerHTML));
        quantity(qtValue);
        name(document.querySelector(".product .title").innerHTML);
        image(document.querySelector(".product .product-image").src)
    }


  return (
    <>
        <section className='product'>
            <div className="images-container">
                <div className="prev-btn" onClick={() => setImageIndex((value) => --value)}>
                    <img src={PrevBtn} alt="Previous Icon" />
                </div>
                <img src={Product1} alt="" className='product-image' />
                <div className='thumbs-container'>
                    <img src={Thumb1} alt="thumb" id='1' />
                    <img src={Thumb2} alt="thumb" id='2' />
                    <img src={Thumb3} alt="thumb" id='3' />
                    <img src={Thumb4} alt="thumb" id='4' />
                </div>
                <div className="next-btn" onClick={() => setImageIndex((value) => ++value)}>
                    <img src={NextBtn} alt="Next Icon" />
                </div>
            </div>

            <div className="description-container">
                <small className='aside-title'>SNEAKER COMPANY</small>
                <h2 className='title'>Fall Limited Edition Sneakers</h2>
                <p className='description'>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
                <p className='price'>$
                    <span className='price-number'>125.00</span>
                    <span className='promotion-percentage'>50%</span>
                </p>
                <small className='real-value'>$250.00</small>

                <div className='quantity'>
                    <form onSubmit={setCart}>
                        <button className='minus-btn' type='button' onClick={() => setPlus(value => --value)}>
                            <img src={Minus} alt="Icon Minus" />
                        </button>

                        <input type="number" min={0} max={999} className="qt-value" value={qtValue} onChange={(e) => setPlus(e.target.value)} />

                        <button className='plus-btn' type='button' onClick={() => setPlus(value => ++value)}>
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