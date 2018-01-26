import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { range, map } from 'lodash';

const Props = {
  size: PropTypes.number,
}

const DefaultProps = {
  size: 15,
};

class GoBoard extends Component {
  getListItem =() => {
    const { size } = this.props;

    return range(size);
  }

  renderBoardView = () => {
    const totalItems = this.getListItem();
    let a;

    const boardView =
      map(totalItems, (yAxis) => {
        return (
          <div key={yAxis} className="u-d-flex">
            {map(totalItems, (xAxis) => {
              return <button className="u-no-border u-no-padding board__cell" key={yAxis + xAxis}>{a}</button>          
            })}
          </div>
        )
      });

    return boardView;
  }

  render() {
    return (
      <div className="board">
        {this.renderBoardView()}
      </div>
    )
  }
}

GoBoard.propTypes = Props;
GoBoard.defaultProps = DefaultProps;

export default GoBoard;
