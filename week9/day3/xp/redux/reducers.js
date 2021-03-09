let initState = {
  input: '',
  items:[]
}

export const reducer = (state=initState,action={}) => {
  switch (action.type) {
    case 'UPDATE':
      return {...state,input:action.payload}
      case 'ADD':      
          return {...state,items:[...state.items, action.payload]}
          case 'DEL': 
          const find = {...state.items}.findIndex(action.payload)
          return {...state,items:[{...state.items}.splice(find,1)]}
    default:
      return {...state}
  }
}
