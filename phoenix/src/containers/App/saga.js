import { apply, put, takeEvery, call } from 'redux-saga/effects';
import {receiveClips, requestClips} from './actions';
import { REQUEST_CLIPS, RECEIVE_CLIPS } from './constants';
import APIClient  from './../../utils/api';

export function* requestClipsBy({ route }) {
    try {
        const clips = yield apply(APIClient, APIClient.getClips, [{ route }]);
        yield put(receiveClips(clips));
    } catch (e) {
        console.log('error in saga: ', e);
    }
}

export function* watchRequestClips() {
    yield takeEvery(REQUEST_CLIPS, requestClipsBy);
}
