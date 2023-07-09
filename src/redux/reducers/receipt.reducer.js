


const receiptReducer = (state = [], action) => {
    switch(action.type) {
        case 'SET_RECEIPT':
            return action.payload
            default:
                return state;
    }
}

export default receiptReducer;