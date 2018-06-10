import { RECEIVE_ALL_CHANNELS } from './constants';

function channelReducer(state = {}, action) {
    switch (action.type) {
        case RECEIVE_ALL_CHANNELS:
            return {
                ...state,
                channels: action.channels.channels,
            };
        default:
            return state;
    }
}

export default channelReducer;