import React, { Component } from 'react';
import './App.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
library.add(faStroopwafel)





class App extends Component {
  render() {
    return (
      <div className="App">

      <header className="Navbar">
        <img className="logo" src="./img/DarkBG.svg"/>
        <FontAwesomeIcon className="icon" icon={faBars} />
      </header>

      </div>
    );
  }
}

export default App;
