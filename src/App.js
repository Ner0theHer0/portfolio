import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className='intro'>
        <div className='introCtr'>
          <h1>NOT JUST</h1>
          <h1>A DEVELOPER</h1>
          <p>A helping hand for your next project.</p>
          <p>Big, small, and anything in between.</p>
        </div>
      </div>
      <div className="App-header">
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
          Learn React
        </a>
      </div>
    </div>
  );
}

export default App;
