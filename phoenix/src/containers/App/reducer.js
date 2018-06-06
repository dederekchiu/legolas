import {RECEIVE_CLIPS } from './constants';

function appReducer(state = {}, action) {
    switch (action.type) {
        case RECEIVE_CLIPS:
            return {
                ...state,
                clips: action.clips.clips,
            };
        default:
            return state;
    }
}

export default appReducer;