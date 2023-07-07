import axios from 'axios';
import { put, takeLatest} from 'redux-saga/effects';

// this saga is sending a request to get the data of the users purchase
// when they hit checkout

function* fetchReceipt(action) {

    try {
        const itemResponse = yield axios.get(`/api/receipt?order_id=${action.payload}`)
        yield put ({type: 'SET_RECEIPT', payload: itemResponse.data});
        console.log('itemResponse data is:', itemResponse.data);
    }
    catch (error) {
        console.log('error GETting receipt', error);
    }
}

function* receiptSaga() {
    yield takeLatest('FETCH_RECEIPT', fetchReceipt)
}

export default receiptSaga;