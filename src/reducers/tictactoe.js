import TAKE_TILE from '../actions/games/board'
const initialState = ["o","","","","x","","","x","o"]

export default function (state = [], {type, payload}) {
  switch (type) {

    case TAKE_TILE :
      const board = { ...payload}
      console.table({...payload});
      console.log(board);
      return board.tiles

      default:
        return initialState
  }
console.table(state)

}
