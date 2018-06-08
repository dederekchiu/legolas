import { combineReducers } from 'redux';
import appReducer from './containers/App/reducer';
import broadcasterReducer from './containers/BroadcasterPage/reducer';

const reducers = combineReducers({
    app: appReducer,
    broadcaster: broadcasterReducer,
});

export default reducers;