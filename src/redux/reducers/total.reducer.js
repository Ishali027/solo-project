


const totalReducer = (state = 0, action) => {
    switch(action.type) {
        case 'UPDATE_GRANDTOTAL':
            return action.payload.grandTotal;
            default:
                return state;
    }
}

export default totalReducer;