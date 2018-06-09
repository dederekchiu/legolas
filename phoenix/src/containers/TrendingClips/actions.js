import {
    RECEIVE_TRENDING_CLIPS,
    REQUEST_TRENDING_CLIPS,
} from './constants';

export const requestTrendingClips = () => ({
    type: REQUEST_TRENDING_CLIPS,
});

export const receiveTrendingClips = (trendingClips) => ({
    type: RECEIVE_TRENDING_CLIPS,
    trendingClips: trendingClips,
});
