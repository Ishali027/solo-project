import  {put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

//this saga is sending a request to the server to get the data on the meat from the database

function* fetchMeats() {

    try {
        const itemResponse = yield axios.get('/api/meat')
        yield put ({type: 'SET_MEAT', payload: itemResponse.data});
        console.log('itemresponse data is:', itemResponse.data);
    }
    catch (error) {
        console.log('error GETting meat in saga', error);
    }
}

function* meatSaga() {
    yield takeLatest('FETCH_MEATS', fetchMeats)
}

export default meatSaga;