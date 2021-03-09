let initState = {
  searchText: ''
}

export const reducer = (state=initState,action={}) => {
  switch (action.type) {
    case 'SEARCH_TEXT':
    console.log('SEARCH_TEXT');
      return {...state, searchText:action.payload}
      break;
    default:
      return {...state}
  }
}
