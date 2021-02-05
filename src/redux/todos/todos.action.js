import axios from 'axios'
import * as actionTypes from './todos.actionTypes'
const endpoint = 'https://adeleke-todo-list.herokuapp.com'

export const fetctStart =()=>{
  return{
    type : actionTypes.FETCH_START
  }
}

export const fetchFail =(error)=>{
  return {
    type: actionTypes.FETCH_FAIL,
    error: error
  }
}

export const fetchSuccess =(todos)=>{
  return {
    type: actionTypes.FETCH_SUCCESS,
    todos: todos
  }
}

export const fetchTodos =()=>{
return dispatch=>{
  dispatch(fetctStart()) 
  axios.get(`${endpoint}/todos`)
  .then((res)=> {
    const todos = res.data;
    dispatch(fetchSuccess(todos))
    console.log(res.data)
    })
  .catch((error)=>{
    dispatch(fetchFail(error))
  })

}
}

export const deleteTodos = (id)=>{
  return dispatch=>{
    axios(`${endpoint}/todos/${id}`)
    .then((res)=>{
      dispatch(fetchTodos())
    })
    .catch((error)=>{
      dispatch(fetchFail(error))
    })
  }
}