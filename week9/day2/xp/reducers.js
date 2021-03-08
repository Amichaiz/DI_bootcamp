export let initState = {
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
