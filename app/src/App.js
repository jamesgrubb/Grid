import React from 'react';
import logo from './logo.svg';
import { Video } from './views/Video'
import { ImageParent, Image} from './components/StyledImage/StyledImage'
import './App.css';

function App( props ) {
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
      <Video />
    <ImageParent>
      <Image src="https://res.cloudinary.com/makingthings/image/upload/v1558546514/samsung/FunRun.jpg" alt="fun run" />
    </ImageParent>
      

    </div>
  );
}

export default App;
