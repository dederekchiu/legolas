import {
    SEARCH_CHANNEL,
    SEARCH_GAME,
    RECEIVE_GAMES,
    RESET_LIST_OF_GAMES,
} from './constants';

export const searchChannel = (channelText) => ({
    type: SEARCH_CHANNEL,
    channelText,
});

export const searchGame = (queryGames) => ({
    type: SEARCH_GAME,
    queryGames,
});

export const receiveGames = (games) => ({
    type: RECEIVE_GAMES,
    games,
});

export const resetListOfGames = () => ({
    type: RESET_LIST_OF_GAMES
});

