import { all, call } from 'redux-saga/effects';
import { watchRequestClips } from './containers/App/saga';
import { watchRequestClipsByBroadcaster } from './containers/BroadcasterPage/saga';
import { watchRequestClipsByGame } from './containers/GamePage/saga';

const safe = function* (gen) {
    try {
        yield call(gen);
    } catch (err) {
        console.log('err: ', err);
    }
}

export default function* root() {
    yield all([
        safe(watchRequestClips),
        safe(watchRequestClipsByBroadcaster),
        safe(watchRequestClipsByGame),
    ]);
}
