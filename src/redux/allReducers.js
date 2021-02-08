import * as actionTypes from './todos/todos.actionTypes'
import {fetchStart, fetchFail, fetchSuccess} from './todos/todos.reducer'

const initialState ={
  error: null,
  todos:[],
  loading: false,
  token: null,
	redirect: false,
	detail: null,
}



const allReducer=(state=initialState, action)=> {
  switch (action.type) {
    case actionTypes.FETCH_START:
      return fetchStart(state, action)
    case actionTypes.FETCH_FAIL:
      return fetchFail(state, action)
    case actionTypes.FETCH_SUCCESS:
      return fetchSuccess(state, action)          
    default:
      return state
  }
}
export default allReducer
