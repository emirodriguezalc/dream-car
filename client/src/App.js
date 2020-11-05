import './App.css';
import Header from './components/header/Header';
import Filters from './components/filters/Filters';
import CarList from './components/carList/CarList';
import React, { useState } from 'react';

function App() {
  const [cars, setCars] = useState([])
  return (
    <div className="App">
      <section>
        <Header />
        <Filters setCars={setCars} />
        <CarList cars={cars} />
      </section>
    </div>
  );
}

export default App;
