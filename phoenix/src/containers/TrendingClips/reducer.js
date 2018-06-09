import { RECEIVE_TRENDING_CLIPS } from './constants';

function trendingClipsReducer(state = {}, action) {
    switch (action.type) {
        case RECEIVE_TRENDING_CLIPS:
            return {
                ...state,
                clips: action.trendingClips.clips,
            };
        default:
            return state;
    }
}

export default trendingClipsReducer;