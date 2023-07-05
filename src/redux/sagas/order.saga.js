import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';



function* postOrder() {
    try{
        console.log(action.payload);
        yield axios.post('/api/order', action.payload)
        yield put({type: 'FETCH_MEATS'})
        console.log(action.payload);

    } catch (error) {
        console.log('error POSTing', error);
    }

}




function* postOrderSaga() {
    yield takeLatest( 'POST_ORDERS', postOrder)

}
export default postOrderSaga;


//ignore below, these comments are notes for me to save code
// const [grandTotal, setGrandTotal] = useState(cartList.reduce((accum, item) => accum + Number(item.price).toFixed(2) * Number(item.quantity), 0), [cartList])
// const grandTotal = useMemo(() => cartList.reduce((accum, item) => accum + Number(item.price).toFixed(2) * Number(item.quantity), 0), [cartList]);
