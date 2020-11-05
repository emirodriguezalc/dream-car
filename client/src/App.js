import logo from './logo.svg';
import './App.css';

function App() {
  let data;
  fetch('/api/cars')
    .then(response => response.json())
    .then(data => data.Trims)
    .then(trims => console.log(trims[0]))
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {data}
        </a>
      </header>
    </div>
  );
}

export default App;
