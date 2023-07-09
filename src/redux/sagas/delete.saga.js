import {put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';



function* deleteOrder(action) {
    try{
        console.log('action.payload is', action.payload);
        yield axios.delete(`api/orders/${action.payload}`)
        yield put ({type: 'GET_ALL_ORDERS'})
    } catch (error) {
        console.log('error DELETEing order in saga', error);
    }
}

function* deleteSaga () {
    yield takeLatest('DELETE', deleteOrder)
}

export default deleteSaga;