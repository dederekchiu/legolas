import {
    RECEIVE_TRENDING_CLIPS,
    TOGGLE_CLIPS_MODAL,
} from './constants';

function trendingClipsReducer(state = {openClips: false}, action) {
    switch (action.type) {
        case RECEIVE_TRENDING_CLIPS:
            return {
                ...state,
                clips: action.trendingClips.clips,
            };
        case TOGGLE_CLIPS_MODAL:
            return {
                ...state,
                openClips: !state.openClips,
                clip: action.clip,
            };
        default:
            return state;
    }
}

export default trendingClipsReducer;
