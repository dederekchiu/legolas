import { combineReducers } from 'redux';
import appReducer from './containers/GamesList/reducer';
import broadcasterReducer from './containers/BroadcasterPage/reducer';
import gamesReducer from './containers/GamePage/reducer';
import trendingClipsReducer from './containers/TrendingClips/reducer';

const reducers = combineReducers({
    listOfGames: appReducer,
    broadcaster: broadcasterReducer,
    games: gamesReducer,
    trending: trendingClipsReducer,
});

export default reducers;
