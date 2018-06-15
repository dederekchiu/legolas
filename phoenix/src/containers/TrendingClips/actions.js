import {
    RECEIVE_TRENDING_CLIPS,
    REQUEST_TRENDING_CLIPS,
    TOGGLE_CLIPS_MODAL,
} from './constants';

export const requestTrendingClips = () => ({
    type: REQUEST_TRENDING_CLIPS,
});

export const receiveTrendingClips = (trendingClips) => ({
    type: RECEIVE_TRENDING_CLIPS,
    trendingClips,
});

export const toggleClips = (clip) => ({
    type: TOGGLE_CLIPS_MODAL,
    clip
});
