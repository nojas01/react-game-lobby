import API from '../../api/client'
import game from './join'

export const TAKE_TILE = 'TAKE_TILE'

const api = new API()


export default () => {
  return (dispatch) => {
    dispatch({
      type: 'TAKE_TILE',
      payload: game
  })
}
}

export const takeTile = (index) => {
  return (dispatch) => {
    dispatch({
    type: 'TAKE_TILE',
    payload: index
    })
  }
}
