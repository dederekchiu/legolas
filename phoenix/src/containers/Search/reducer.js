import {
    RECEIVE_GAMES,
    RESET_LIST_OF_GAMES,
} from './constants';

function searchReducer(state = {}, action) {
    switch (action.type) {
        case RECEIVE_GAMES:
            const games = action.games.games;
            const listOfSearchGames= games.map(game => game.name);
            return {
                ...state,
                listOfSearchGames
            };
        case RESET_LIST_OF_GAMES:
            return {
                ...state,
                listOfSearchGames: []
            };
        default:
            return state;
    }
}

export default searchReducer;
