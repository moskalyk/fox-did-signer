import logo from './logo.svg';
import './App.css';

import Fox from '../raw/index.js'

function App() {

  const fdid = new Fox()

  const signature = {
    0xaecee: [1,4,3],
    0xfaceb: [3,6,9]
  }

  // a snapshot to the window, and don't forget the wall 🧱
  console.log(fdid.sign()) 
  console.log(fdid.snapshot(signature)) 

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
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
