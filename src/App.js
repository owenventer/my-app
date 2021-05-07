import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <font color="red"><h1>David's toast is now cold and hard</h1></font>
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>
          
          <b><font color="blue"> ICE COLD AND ROCK HARD</font></b>
        </p>
        <a
          className="App-link"
          href="https://respect.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Press F to pay respects
        </a>
      </header>
    </div>
  );
}

export default App;
