import React from "react";
import './App.css';

import Nav from "./components/Nav";
import Promo from "./components/Promo";
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <Promo />
      <Footer />
    </div>
  );
}

export default App;
