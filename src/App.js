import './App.css';
import { Component } from 'react/cjs/react.production.min';

function Body() {
  return (
    <p>
      Starting text
    </p>
  );
}

class Header extends Component {
  render() {
    return(
      <header className="App-Header">
        <h1 className='App-Title'>Task Tracker App</h1>
      </header>
    )
  }
}

function App() {
  return (
    <div className="App">
      <Header/>
      <Body/>
    </div>
  );
}

export default App;
