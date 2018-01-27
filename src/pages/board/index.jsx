import React, { Component } from 'react';
import { times, clone } from 'lodash';

import {
  GoBoard
} from './components';
import { SIZE, PLAYERS } from './constant';

function fakeBoardData() {
  const boardData = times(SIZE, (y) => {
    return times(SIZE, (x) => null);
  });

  return boardData;
}

class BoardContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      boardData: fakeBoardData(),
      size: SIZE,
      currentPlayer: PLAYERS.A, 
    };
  }

  checkCell = (xAxis, yAxis) => {
    const { boardData } = this.state;
    const isSelectedCell = boardData[xAxis][yAxis];

    // the cell is existing value
    if (isSelectedCell) {
      return true;
    }

    // the cell value is null
    return false;
  }

  getNextPlayer = () => {
    const { A, B } = PLAYERS;

    return this.state.currentPlayer === A ? B : A; 
  }

  handleSelectCell = (xAxis, yAxis) => {
    const isSelectedCell = this.checkCell(xAxis, yAxis);
    
    if (!isSelectedCell) {
      const { boardData, currentPlayer } = this.state;
      // update board data
      let cloneBoardData = clone(boardData);
      cloneBoardData[xAxis][yAxis] = currentPlayer;

      // update player
      const nextPlayer = this.getNextPlayer();

      this.setState({
        boardData: cloneBoardData,
        currentPlayer: nextPlayer,
      }, () => console.table(cloneBoardData))
    }
  }

  render() {
    const { size } = this.state;

    return (
      <div>
        <GoBoard
          size={size}
          onClickCell={this.handleSelectCell}
          data={this.state.boardData}
        />
      </div>
    );
  }
}

export default BoardContainer;
