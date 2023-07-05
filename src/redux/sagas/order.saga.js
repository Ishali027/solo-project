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