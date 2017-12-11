import API from '../../api/client'
// import game from '../../containers/Game'

export const UPDATE_BOARD = 'UPDATE_BOARD'

const api = new API()

export default (index, game) => (dispatch) => () => {
  dispatch ({
    type: 'UPDATE_BOARD',
    payload: index
  })

  api.patch(`/games/${game._id}`, {index})
      .then((res) => {
          console.log(res);
          console.log(index);
      })

}

//
// takeTile = index => () => {
//   this.props.dispatch({
//     type: 'UPDATE_BOARD',
//     payload: index
//   })
// }
