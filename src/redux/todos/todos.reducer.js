import {newObject} from '../utils'



const fetchStart =(state, action)=>{
  return newObject(state,{
    loading: true,
    error:null
  })
}
const fetchSuccess =(state, action)=>{
  return newObject(state,{
    todos: action.todos,
    loading: false,
    error:null
  })
}

const fetchFail =(state, action)=>{
  return newObject(state,{
    loading: false,
    error:action.error
  })
}