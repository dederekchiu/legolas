import { RECEIVE_CLIPS_BY_GAME } from './constants';

function gameReducer(state = {}, action) {
    switch (action.type) {
        case RECEIVE_CLIPS_BY_GAME:
            return {
                ...state,
                clips: action.clips.clips,
            };
        default:
            return state;
    }
}

export default gameReducer;