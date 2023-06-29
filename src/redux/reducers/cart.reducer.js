


const cart = (state = [], action) => {
    switch(action.type) {
        case 'UPDATE_CART':
            return [...state, action.payload];
            default:
                return state;
    }
}



export default cart;