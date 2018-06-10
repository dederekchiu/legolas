import { all, call } from 'redux-saga/effects';
import { watchRequestClips } from './containers/GamesList/saga';
import { watchRequestClipsByBroadcaster } from './containers/ChannelClips/saga';
import { watchRequestClipsByGame } from './containers/GameClips/saga';
import { watchRequestTrendingClips } from './containers/TrendingClips/saga';
import { watchRequestChannels } from './containers/ChannelsList/saga';

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
        safe(watchRequestChannels),
    ]);
}
