import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{"color": "royalblue"}}>David's toast is always very cold and hard</h1>
        <p>Some test text</p>
        <p>Owen's new text</p>
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
          Press F to pay somber respects
        </a>
        <a href="https://google.com" target="blank">Click me</a>
        <a href="http://uct.ac.za">Click this too</a>
      </header>
    </div>
  );
}

export default App;
