


const cart = (state = [], action) => {
    switch(action.type) {
        case 'UPDATE_CART':
            /*
                - check to see if the current meat in the payload exists in state already
                - if it does, add the current quantity to the old quantity
                - if it does not, spread it to the back of the state
            */
            console.log(state);
            const itemInState = state.find(item => item.meat === action.payload.meat)

            if (itemInState) {
                return state.map(item => {
                    if (item.meat === action.payload.meat) {
                        item.quantity += action.payload.quantity;
                    }
                    return item;
                });
            } else {
                return [...state, action.payload];
            }

        case 'CLEAR_CART':
            return [];
            default:
                return state;
    }
}



export default cart;