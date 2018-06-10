import {
    RECEIVE_ALL_CHANNELS,
    REQUEST_ALL_CHANNELS
} from './constants';

export const requestAllChannels = () => ({
    type: REQUEST_ALL_CHANNELS,
});

export const receiveAllChannels = (channels) => ({
    type: RECEIVE_ALL_CHANNELS,
    channels,
});
