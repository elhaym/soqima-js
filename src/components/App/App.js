import React, { Component } from 'react';

import './App.css';
import '../../styles/theme.scss';
import '../../styles/custom.scss';

import Header from '../Header/Header';
import Folder from '../Page/Folder/Folder';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Folder />
      </div>
    );
  }
}

export default App;
