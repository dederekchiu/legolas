import {
    RECEIVE_CLIPS_BY_GAME,
    REQUEST_CLIPS_BY_GAME,
} from './constants';

export const requestClipsByGame = (route) => ({
    type: REQUEST_CLIPS_BY_GAME,
    route,
});

export const receiveClipsByGame = (clips) => ({
    type: RECEIVE_CLIPS_BY_GAME,
    clips,
});

