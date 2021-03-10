
export const plus = () => {
  return {
    type: 'INCREMENT',
  }
}

export const minus = () => {
  return {
    type: 'DECREMENT',
  }
}

export const plusodd = () => {
    return {
      type: 'INCREMENT_ODD',
    }
}
export const plussync = () => (dispatch) => {
  setTimeout(()=>{
    dispatch({
    type: 'INCREMENT_LATE',
  })},1000)
}
