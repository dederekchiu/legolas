import {
    RECEIVE_CLIPS_BY_GAME,
    REQUEST_CLIPS_BY_GAME,
} from './constants';

export const requestClipsByGame = (route, period) => ({
    type: REQUEST_CLIPS_BY_GAME,
    route,
    period,
});

export const receiveClipsByGame = (clips) => ({
    type: RECEIVE_CLIPS_BY_GAME,
    clips,
});

