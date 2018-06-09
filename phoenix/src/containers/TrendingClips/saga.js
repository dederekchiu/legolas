import { apply, put, takeEvery, call } from 'redux-saga/effects';
import { receiveTrendingClips } from './actions';
import { REQUEST_TRENDING_CLIPS } from './constants';
import APIClient  from './../../utils/api';

export function* requestTrendingClips({  }) {
    try {
        const trendingClips = yield apply(APIClient, APIClient.getTrendingClips, [{  }]);
        yield put(receiveTrendingClips(trendingClips));
    } catch (e) {
        console.log('error in saga: ', e);
    }
}

export function* watchRequestTrendingClips() {
    yield takeEvery(REQUEST_TRENDING_CLIPS, requestTrendingClips);
}
