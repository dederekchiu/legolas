import { apply, put, takeEvery, call } from 'redux-saga/effects';
import { searchChannel, searchGame, receiveGames } from './actions';
import { SEARCH_GAME, SEARCH_CHANNEL } from './constants';
import APIClient  from './../../utils/api';

export function* searchGames({ queryGames }) {
    try {
        console.log('QUERYGAMES: ', queryGames);
        const games = yield apply(APIClient, APIClient.searchGames, [{ queryGames }]);
        console.log('GAMES: ', games);
        yield put(receiveGames(games));
    } catch (e) {
        console.log('error in saga: ', e);
    }
}

export function* watchSearchGames() {
    yield takeEvery(SEARCH_GAME, searchGames);
}
