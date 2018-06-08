import {RECEIVE_CLIPS_BY_BROADCASTER, RECEIVE_CLIPS_BY_GAME} from './constants';

function appReducer(state = {}, action) {
    switch (action.type) {
        case RECEIVE_CLIPS_BY_GAME:
            return {
                ...state,
                clips: action.clips.clips,
            };
        case RECEIVE_CLIPS_BY_BROADCASTER:
            return {
                ...state,
                clips: action.clips.clips,
            };
        default:
            return state;
    }
}

export default appReducer;