import { combineReducers } from 'redux';
import appReducer from './containers/App/reducer';
import broadcasterReducer from './containers/BroadcasterPage/reducer';
import gamesReducer from './containers/GamePage/reducer';

const reducers = combineReducers({
    listOfGames: appReducer,
    broadcasterClips: broadcasterReducer,
    gamesClip: gamesReducer,
});

export default reducers;