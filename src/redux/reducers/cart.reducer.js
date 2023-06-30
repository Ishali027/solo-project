


const cart = (state = [], action) => {
    switch(action.type) {
        case 'UPDATE_CART':
            return [...state, action.payload];
        case 'CLEAR_FROM_CART':
            return [];
            default:
                return state;
    }
}



export default cart;