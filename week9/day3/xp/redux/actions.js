
export const contentupdate = (value) => {
  return{
    type:'UPDATE',
    payload: value
  }
}

export const addNew = (content) => {
  return{
    type:'ADD',
    payload:content
  }
}

export const delme = (value) => {
  console.log(value);
  return{
    type:'DEL',
    payload:value
  }
}
