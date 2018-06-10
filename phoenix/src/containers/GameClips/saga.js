import { apply, put, takeEvery, call } from 'redux-saga/effects';
import {receiveClipsByGame, receiveClipsByBroadcaster} from './actions';
import {REQUEST_CLIPS_BY_GAME} from './constants';
import APIClient  from './../../utils/api';

export function* requestClipsByGame({ route }) {
    try {
        const clips = yield apply(APIClient, APIClient.getClipsByGame, [{ route }]);
        yield put(receiveClipsByGame(clips));
    } catch (e) {
        console.log('error in saga: ', e);
    }
}

export function* watchRequestClipsByGame() {
    yield takeEvery(REQUEST_CLIPS_BY_GAME, requestClipsByGame);
}
