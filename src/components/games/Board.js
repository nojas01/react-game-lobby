
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Tile from './Tile'
import './Board.css'
import board from '../../reducers/tictactoe'
import {takeTile} from '../../actions/games/board'
import PropTypes from 'prop-types'

class Board extends PureComponent {
// static PropTypes = {
//   takeTile: PropTypes.func.isRequired
// }

  renderTile = (value, index) => {
    return <Tile key={index} onClick={this.props.takeTile} value={value} />
  }

  render() {
    return (
      <div className="Board">
        {this.props.board.map(this.renderTile)}
      </div>
    )
  }
}

const mapStateToProps = ({ board }) => ({ board })

export default connect(mapStateToProps, {takeTile})(Board)
// export default Board
