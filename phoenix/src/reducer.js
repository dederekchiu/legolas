import { combineReducers } from 'redux';
import appReducer from './containers/GamesList/reducer';
import channelReducer from './containers/ChannelClips/reducer';
import gamesReducer from './containers/GameClips/reducer';
import trendingClipsReducer from './containers/TrendingClips/reducer';
import channelsReducer from './containers/ChannelsList/reducer';

const reducers = combineReducers({
    listOfGames: appReducer,
    channel: channelReducer,
    games: gamesReducer,
    trending: trendingClipsReducer,
    channels: channelsReducer,
});

export default reducers;
