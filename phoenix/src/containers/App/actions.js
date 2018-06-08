import {
    RECEIVE_CLIPS_BY_GAME,
    REQUEST_CLIPS_BY_GAME,
    REQUEST_CLIPS_BY_BROADCASTER,
    RECEIVE_CLIPS_BY_BROADCASTER,
} from './constants';

export const requestClipsByGame = (route) => ({
    type: REQUEST_CLIPS_BY_GAME,
    route,
});

export const receiveClipsByGame = (clips) => ({
    type: RECEIVE_CLIPS_BY_GAME,
    clips,
});

export const requestClipsByBroadcaster = (route) => ({
    type: REQUEST_CLIPS_BY_BROADCASTER,
    route,
});

export const receiveClipsByBroadcaster = (clips) => ({
    type: RECEIVE_CLIPS_BY_BROADCASTER,
    clips,
});
