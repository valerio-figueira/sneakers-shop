import React from 'react';


import ProductSection from '../components/ProductSection';

function Home(props) {
  return (
    <>
      <ProductSection
      price={props.price}
      quantity={props.quantity}
      name={props.name}
      image={props.image}
      />
    </>
  )
}

export default Home;