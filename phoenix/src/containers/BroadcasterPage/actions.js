import {
    REQUEST_CLIPS_BY_BROADCASTER,
    RECEIVE_CLIPS_BY_BROADCASTER,
} from './constants';


export const requestClipsByBroadcaster = (route) => ({
    type: REQUEST_CLIPS_BY_BROADCASTER,
    route,
});

export const receiveClipsByBroadcaster = (clips) => ({
    type: RECEIVE_CLIPS_BY_BROADCASTER,
    clips,
});
