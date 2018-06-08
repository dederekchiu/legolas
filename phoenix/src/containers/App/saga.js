import { apply, put, takeEvery, call } from 'redux-saga/effects';
import {receiveClipsByGame, receiveClipsByBroadcaster} from './actions';
import {REQUEST_CLIPS_BY_GAME, RECEIVE_CLIPS_BY_GAME, REQUEST_CLIPS_BY_BROADCASTER} from './constants';
import APIClient  from './../../utils/api';

export function* requestClipsByGame({ route }) {
    try {
        const clips = yield apply(APIClient, APIClient.getClipsByGame, [{ route }]);
        yield put(receiveClipsByGame(clips));
    } catch (e) {
        console.log('error in saga: ', e);
    }
}

export function* requestClipsByBroadcaster({ route }) {
    try {
        const clips = yield apply(APIClient, APIClient.getClipsByBroadcaster, [{ route }]);
        yield put(receiveClipsByBroadcaster(clips));
    } catch (err) {
        console.log('error in request by broadcaster: ', err);
    }
}

export function* watchRequestClips() {
    yield takeEvery(REQUEST_CLIPS_BY_GAME, requestClipsByGame);
    yield takeEvery(REQUEST_CLIPS_BY_BROADCASTER, requestClipsByBroadcaster);
}
