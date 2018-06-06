import {RECEIVE_CLIPS, REQUEST_CLIPS} from './constants';

export const requestClips = (route) => ({
    type: REQUEST_CLIPS,
    route,
});

export const receiveClips = (clips) => ({
    type: RECEIVE_CLIPS,
    clips,
});
