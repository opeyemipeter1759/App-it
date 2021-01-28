import {newObject} from '../utils'



export const fetchStart =(state, action)=>{
  return newObject(state,{
    loading: true,
    error:null
  })
}
export const fetchSuccess =(state, action)=>{
  return newObject(state,{
    todos: action.todos,
    loading: false,
    error:null
  })
}

export const fetchFail =(state, action)=>{
  return newObject(state,{
    loading: false,
    error:action.error
  })
}