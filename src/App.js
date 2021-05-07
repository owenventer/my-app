import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{"color": "royalblue"}}>David's toast is burnt</h1>
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
        <a href="https://owenventer.com" target="blank">Second BLOG ON THE PLANET</a>
        <a href="https://owenventer.com" target="blank">DEFINITELY BEST BLOG ON THE PLANET</a>
        <a href="https://owenventer.com">Click this too</a>
      </header>
    </div>
  );
}

export default App;
