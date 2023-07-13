// App.js


import './App.css';
import React, { useEffect } from 'react';
import Header from './components/Header';
import Article from './components/Article';
import Footer from './components/Footer';


function App() {
  useEffect(() => {
    document.title = 'R-ALAB 320H.1.2 - React Fashion Blog';
  }, []);
  
  return (
    <div className="App">
      <Header />
      <Article />
      <Footer />
    </div>
  );
}

export default App;
