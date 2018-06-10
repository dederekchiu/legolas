import { apply, put, takeEvery, call } from 'redux-saga/effects';
import { receiveAllChannels } from './actions';
import { REQUEST_ALL_CHANNELS } from './constants';
import APIClient  from './../../utils/api';

export function* requestChannels({ }) {
    try {
        const channels = yield apply(APIClient, APIClient.getAllChannels, [{  }]);
        yield put(receiveAllChannels(channels));
    } catch (e) {
        console.log('error in saga: ', e);
    }
}

export function* watchRequestChannels() {
    yield takeEvery(REQUEST_ALL_CHANNELS, requestChannels);
}
