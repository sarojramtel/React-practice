import logo from './logo.svg';
import './App.css';
import Stock from "./Stock"

function App() {
  const person ={
    name : 'test',
    age : 23,
    address : 'kathmandu'
  };
  const courseName = "MERN";
  const url = "https://openai.com";
  const scores = [20,23,25,23,22,12]
  return (
    <div className="App">
      <h1>
      <Stock />
      </h1>
      <h1><Stock securityName="abcd" symbol="ABCD" lastTradedPrice="3444" /></h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href = {url}
          // href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React and {courseName}
        </a>
        <h1>{person.name} is {person.age} years old lives in {person.address}. His scores are </h1>
        <ul>
          {scores.map(s=><li>{s}</li>)}
        </ul>
      </header>
      
    </div>
  );
}

export default App;
