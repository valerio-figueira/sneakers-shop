import './App.css';


    // STATIC
    import Header from './static/Header';

    //  PAGES
    import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <main className='container'>
        <Home />  
      </main>
    </div>
  );
}

export default App;
