import { TOGGLE_CLIP_MODAL } from './constants';

function clipModalReducer(state = {}, action) {
    switch (action.type) {
        case TOGGLE_CLIP_MODAL:
            return {
                ...state,
            };
        default:
            return state;
    }
}

export default clipModalReducer;