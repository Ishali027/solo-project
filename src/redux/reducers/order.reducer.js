


const orderReducer = (state = [], action) => {
    console.log("This is order reducer:", action.payload)
    switch(action.type) {
        case 'SET_ALL_ORDERS':
            return action.payload;
            default:
                return state;
    }
    
}

export default orderReducer;