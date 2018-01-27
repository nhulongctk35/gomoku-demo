import React, { Component } from 'react';

import BoardContainer from './pages/board/index';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="u-text-center">Demo Gmoku game</h1>
        <BoardContainer />
      </div>
    );
  }
}

export default App;
