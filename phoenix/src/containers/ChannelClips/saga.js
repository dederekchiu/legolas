import { apply, put, takeEvery, call } from 'redux-saga/effects';
import { receiveClipsByBroadcaster } from './actions';
import { REQUEST_CLIPS_BY_BROADCASTER} from './constants';
import APIClient  from './../../utils/api';

export function* requestClipsByBroadcaster({ route }) {
    try {
        const clips = yield apply(APIClient, APIClient.getClipsByChannel, [{ route }]);
        yield put(receiveClipsByBroadcaster(clips));
    } catch (err) {
        console.log('error in request by broadcaster: ', err);
    }
}

export function* watchRequestClipsByBroadcaster() {
    yield takeEvery(REQUEST_CLIPS_BY_BROADCASTER, requestClipsByBroadcaster);
}
