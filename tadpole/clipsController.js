const axios = require('axios');
const twitchClientKey = 'ttdi6mafhcp4ksk1zki28kxeep89p8';
const twitchSecret = '6tv0j5n1nifgmcidqe08gsrblodq1u';

const topClipsUrl = 'https://api.twitch.tv/kraken/clips/top';
const headers = {'Client-ID': twitchClientKey, 'Accept': 'application/vnd.twitchtv.v5+json'};

const getTopClips = (req, res) => {
    axios.get(`${topClipsUrl}?limit=30`,
        {
            headers: {'Client-ID': twitchClientKey, 'Accept': 'application/vnd.twitchtv.v5+json'}
        })
        .then(response => {
            let streams = response.data;
            res.send(streams);

        }).catch((err) => {
            console.log('why you error', err);
        });
};

const getClipsByGame = (req, res) => {
    const game = req.params.game;
    const period = (req.query.period) ? req.query.period : 'all';
    const trending = req.params.trending;
    let url = `${topClipsUrl}?game=${game}&limit=30&period=${period}`;
    url = (trending ? `${url}&trending=true` : url);
    axios
        .get(url, {headers})
        .then(response => {
            let streams = response.data;
            res.send(streams);
        }).catch((err) => {
            console.log('why you error', err);
        });
};

const getClipsByChannel = (req, res) => {
    const channel = req.params.channel;
    const period = (req.query.period) ? req.query.period : 'all';
    const trending = req.params.trending;
    let url = `${topClipsUrl}?channel=${channel}&limit=30&period=${period}`;
    url = (trending ? `${url}&trending=true` : url);
    axios
        .get(url, {headers})
        .then(response => {
            let streams = response.data;
            res.send(streams);
        }).catch((err) => {
        console.log('why you error', err);
    });
};

const getTrendingClips = (req, res) => {
    axios.get(`${topClipsUrl}?trending=true&limit=3`, {headers})
        .then(response => {
            let trendingClips = response.data;
            res.send(trendingClips);
        }).catch((err) => {
            console.log('err on trending clips', err);
    })
};

const getTrendingClipsByChannel = (req, res) => {
    const url = `${topClipsUrl}?channel=${req.params.channel}&trending=true`;
    axios
        .get(url, {headers})
        .then(response => {
            res.send(response.data);
        })
        .catch((err) => {
            console.log('get trending clips by channel', err);
        });
};

const getTrendingClipsByGame = (req, res) => {
    const url = `${topClipsUrl}?channel=${req.params.game}&trending=true`;
    axios
        .get(url, {headers})
        .then(response => {
            res.send(response.data);
        })
        .catch((err) => {
            console.log('get trending clips by channel', err);
        });
};

exports.getTrendingClipsByGame = getTrendingClipsByGame;
exports.getTrendingClipsByChannel = getTrendingClipsByChannel;
exports.getTopClips = getTopClips;
exports.getClipsByGame = getClipsByGame;
exports.getClipsByChannel = getClipsByChannel;
exports.getTrendingClips = getTrendingClips;
