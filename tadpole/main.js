const http = require('http');
const express = require('express');
const { getTopClips, getClipsByGame, getClipsByChannel, getTrendingClips } = require('./clipsController');
const { getTopGames } = require('./gamesController');
const { getLiveStreamers } = require('./broadcasterController');
const { getTopChannels } = require('./channelsController');
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
app.get('/clips/game/:game', getClipsByGame);
app.get('/clips/channels/:channel', getClipsByChannel);

// GAMES
app.get('/games', getTopGames);

// STREAMS
app.get('/streamers', getLiveStreamers);
app.get('/channels', getTopChannels);
