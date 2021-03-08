/*export const increase = () => {
    return{
      type:'INC',
    }
  }
  export const decrease = () => {
    return{
      type:'DEC',
    }
  }*/
  export const watchme = (e) => {
      console.log(e);
    return{
        type: 'MOVIE_SELECTED',
        payload: e
    }
  }
  