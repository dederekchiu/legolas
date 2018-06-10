import { RECEIVE_GAMES_LIST } from './constants';

function appReducer(state = {}, action) {
    switch (action.type) {
        case RECEIVE_GAMES_LIST:
            return {
                ...state,
                games: action.games.games,
            };
        default:
            return state;
    }
}

export default appReducer;