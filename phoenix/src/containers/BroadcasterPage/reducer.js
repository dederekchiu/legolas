import {RECEIVE_CLIPS_BY_BROADCASTER} from './constants';

function broadcasterReducer(state = {}, action) {
    switch (action.type) {
        case RECEIVE_CLIPS_BY_BROADCASTER:
            return {
                ...state,
                clips: action.clips.clips,
            };
        default:
            return state;
    }
}

export default broadcasterReducer;