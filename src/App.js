import logo from './logo.svg';
import './App.css';
import github from './github.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Pedro Carneiro</h1>  
        <a
          className="App-link"
          href="https://github.com/pedrocarne"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} className="Nav-Image"></img>
        </a>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img></img>
        </a>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img></img>
        </a>
      </header>
    </div>
  );
}

export default App;
