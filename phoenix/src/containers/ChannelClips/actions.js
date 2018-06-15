import {
    REQUEST_CLIPS_BY_BROADCASTER,
    RECEIVE_CLIPS_BY_BROADCASTER,
} from './constants';


export const requestClipsByBroadcaster = (route, period) => ({
    type: REQUEST_CLIPS_BY_BROADCASTER,
    route,
    period,
});

export const receiveClipsByBroadcaster = (clips) => ({
    type: RECEIVE_CLIPS_BY_BROADCASTER,
    clips,
});
