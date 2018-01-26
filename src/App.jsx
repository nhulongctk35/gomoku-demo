import React, { Component } from 'react';

import {
  GoBoard,
} from './components';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="u-text-center">Demo Gmoku game</h1>
        <GoBoard size={15} />
      </div>
    );
  }
}

export default App;
