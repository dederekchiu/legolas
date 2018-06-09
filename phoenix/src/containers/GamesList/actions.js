import {
    RECEIVE_GAMES_LIST,
    REQUEST_GAMES_LIST,
} from './constants';

export const requestListOfGames = () => ({
    type: REQUEST_GAMES_LIST,
});

export const receiveListOfGames = (games) => ({
    type: RECEIVE_GAMES_LIST,
    games,
});
