


const meatReducer = (state = [], action) => {
    switch(action.type) {
        case 'SET_MEAT':
            return action.payload;
            default:
                return state;
    }
}

export default meatReducer;