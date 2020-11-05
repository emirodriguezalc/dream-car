import './App.css';
import Header from './components/header/Header';
import Filters from './components/filters/Filters';
import CarList from './components/carList/CarList';

function App() {
  let data;
  fetch('/api/cars')
    .then(response => response.json())
    .then(data => data.Trims)
  //.then(trims => console.log(trims[0]))
  return (
    <div className="App">
      <section>
        <Header />
        <Filters />
        <CarList />
      </section>
    </div>
  );
}

export default App;
