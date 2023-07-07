import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';



function* postOrder(action) {
    try{
        console.log(action.payload);
        const receipt = yield axios.post('/api/orders', action.payload)
        yield put({type: 'SET_RECEIPT', payload: receipt.data})
        yield put({type: 'FETCH_RECEIPT', payload: receipt.data.id})
        yield put({type: 'FETCH_MEATS'})
        console.log(action.payload);

    } catch (error) {
        console.log('error POSTing', error);
    }

}

function* getOrders(action) {
    try {
        const orders = yield axios.get('/api/orders')
        yield put ({type: 'SET_ALL_ORDERS', payload: orders.data})
    } catch (error){}
}



function* postOrderSaga() {
    yield takeLatest( 'POST_ORDERS', postOrder)
    yield takeLatest('GET_ALL_ORDERS', getOrders)
}
export default postOrderSaga;


//ignore below, these comments are notes for me to save code
// const [grandTotal, setGrandTotal] = useState(cartList.reduce((accum, item) => accum + Number(item.price).toFixed(2) * Number(item.quantity), 0), [cartList])
// const grandTotal = useMemo(() => cartList.reduce((accum, item) => accum + Number(item.price).toFixed(2) * Number(item.quantity), 0), [cartList]);
