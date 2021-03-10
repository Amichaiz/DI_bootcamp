let initState = {
  amount: 0
}

export const reducer = (state = initState, action = {}) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, amount: state.amount+1 }
    case 'DECREMENT':
      return { ...state, amount: state.amount-1 }
    case 'INCREMENT_ODD':
      if(state.amount%2===0)
       return { ...state, amount: state.amount+1 }
       return { ...state }
    case 'INCREMENT_LATE':
      return { ...state, amount: state.amount+1 }
    default:
      return { ...state }
  }
}
