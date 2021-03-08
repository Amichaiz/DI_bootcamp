/*let initState = {
    amount: 0
}

export const reducer = (state=initState, action={}) => {
    switch (action.type) {
        case 'INC':
            initState.amount=initState.amount+1;
            return {...state,amount:initState.amount}
        case 'DEC':
            initState.amount=initState.amount-1;
            return {...state,amount:initState.amount}
        default:
            return {...state}
    }
}
*/

let initState = {
    chose: 'Spider-Man: Homecoming'
}

export const reducer = (state=initState, action={}) => {
    switch (action.type) {
        case 'MOVIE_SELECTED':
            return {...state,chose:action.payload}
        default:
            return {...state}
    }
}

export const moviesReducer = () => {
    return(
        [
            {title: 'Spider-Man: Homecoming', releaseDate: '05-07-2017', rating: 7.4,},
            {title: 'Aquaman', releaseDate: '12-07-2018', rating: 7,},
            {title: 'Black Panther', releaseDate: '02-13-2018', rating: 7.4,},
            {title: 'Avengers: Infinity War', releaseDate: '04-25-2018', rating: 8.3,},
            {title: 'Guardians of the Galaxy', releaseDate: '07-30-2014', rating: 7.9,},
        ]
    )
}