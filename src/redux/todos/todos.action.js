import {axios} from 'axios'
const endpoint = 'https://adeleke-todo-list.herokuapp.com'

export const fetctstart =()=>{
  return{
    type : 'FETCH_START'
  }
}

export const fetchFail =(error)=>{
  return {
    type: 'FETCH_FAIL',
    error: error
  }
}

export const fetchSuccess =(todos)=>{
  return {
    type: 'FETCH_SUCCESS',
    todos: todos
  }
}

export const fetchTodos =()=>{
return dispatch=>{
  dispatch(fetctstart()) 
  axios.get(`${endpoint}/todos`).then(
    res=> { const  todos = res.data;
    dispatch(fetchSuccess(todos))
    }
  ).catch((error)=>{
    dispatch(fetchFail(error))
  })

}
}