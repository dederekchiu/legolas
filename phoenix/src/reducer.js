import { combineReducers } from 'redux';
import appReducer from './containers/GamesList/reducer';
import channelReducer from './containers/ChannelClips/reducer';
import gamesReducer from './containers/GameClips/reducer';
import clipModalReducer from './containers/ClipModal/reducer';
import channelsReducer from './containers/ChannelsList/reducer';
import trendingReducer from './containers/TrendingClips/reducer';
import searchReducer from './containers/Search/reducer';

const reducers = combineReducers({
    listOfGames: appReducer,
    channel: channelReducer,
    games: gamesReducer,
    trending: trendingReducer,
    channels: channelsReducer,
    search: searchReducer,
});

export default reducers;
