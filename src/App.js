import React, {useState} from 'react';
import {useSpring, animated, config} from 'react-spring'
import { ReactComponent as RocketLogo} from './Falcon9.svg';
import './App.css';

function App() {
  const AnimatedRocket = animated(RocketLogo)
  const [isLanded, setLanded] = useState(false)
  const props = useSpring({
    transform: 'translateY(0)',
    from: {transform: 'translateY(-20em)'},
    reset: !isLanded,
    reverse: isLanded,
    config: { duration: 3000}})
  return (
    <div className="App">
      <header className="App-header">
        <AnimatedRocket style={props} className="App-logo"/>
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => setLanded(!isLanded)}>{isLanded ? 'Land' : 'Launch'}</button>
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
