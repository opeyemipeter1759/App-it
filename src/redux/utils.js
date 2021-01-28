export const newObject = (prevObject, UpdatedProperties)=>{
  return{
    ...prevObject, ...UpdatedProperties  
  }
}