import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p style={{"color": "royalblue"}}><h1>I really fucking need tea</h1></p>
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>
          
          <b><font color="blue"> Nice hot tea</font></b>
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
