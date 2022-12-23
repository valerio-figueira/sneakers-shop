import './App.css';


    // STATIC
    import Header from './static/Header';

    //  PAGES
    import Home from './pages/Home';

    // COMPONENTS
    import { useEffect, useState } from 'react';


function App() {
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState();
  const [name, setName] = useState();
  const [image, setImage] = useState();


  useEffect(() => {
    console.log(price, quantity, name)
  }, [price, quantity, name])


  return (
    <div className="App">
      <Header
        price={price}
        quantity={quantity}
        name={name}
        image={image}
      />
      <main className='container'>
        <Home
          price={setPrice}
          quantity={setQuantity}
          name={setName}
          image={setImage}
        />
      </main>
    </div>
  );
}

export default App;
