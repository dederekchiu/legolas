const http = require('http');
const express = require('express');
const {
    getTopClips,
    getClipsByGame,
    getClipsByChannel,
    getTrendingClips,
    getTrendingClipsByChannel,
    getTrendingClipsByGame,
} = require('./clipsController');
const { getTopGames } = require('./gamesController');
const { getLiveStreamers } = require('./broadcasterController');
const { getTopChannels, getChannelInfo } = require('./channelsController');
const { getGamesWithSearch } = require('./searchController');
const app = express();

app.listen(8080, () => {
    console.log('listening on port 8080');
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    next();
});

// CLIPS
app.get('/clips/trending', getTrendingClips);
app.get('/clips', getTopClips);
app.get('/clips/games/:game', getClipsByGame);
app.get('/clips/channels/:channel', getClipsByChannel);
app.get('/clips/games/trending/:game', getTrendingClipsByGame);
app.get('/clips/channels/trending/:channel', getTrendingClipsByChannel);

// GAMES
app.get('/games', getTopGames);

// STREAMS
app.get('/streamers', getLiveStreamers);
app.get('/channels', getTopChannels);
app.get('/channels/:channelId', getChannelInfo);

// SEARCH
app.get('/search/games', getGamesWithSearch);