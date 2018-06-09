import { all, call } from 'redux-saga/effects';
import { watchRequestClips } from './containers/GamesList/saga';
import { watchRequestClipsByBroadcaster } from './containers/BroadcasterPage/saga';
import { watchRequestClipsByGame } from './containers/GamePage/saga';
import { watchRequestTrendingClips } from './containers/TrendingClips/saga';

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
        safe(watchRequestTrendingClips),
    ]);
}
