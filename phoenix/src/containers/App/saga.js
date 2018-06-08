import { apply, put, takeEvery, call } from 'redux-saga/effects';
import { receiveListOfGames } from './actions';
import { REQUEST_GAMES_LIST } from './constants';
import APIClient  from './../../utils/api';

export function* requestListOfGames({  }) {
    try {
        const games = yield apply(APIClient, APIClient.getListOfGames, [{  }]);
        yield put(receiveListOfGames(games));
    } catch (e) {
        console.log('error in saga: ', e);
    }
}

export function* watchRequestClips() {
    yield takeEvery(REQUEST_GAMES_LIST, requestListOfGames);
}
