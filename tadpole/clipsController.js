const axios = require('axios');
const twitchClientKey = 'ttdi6mafhcp4ksk1zki28kxeep89p8';
const twitchSecret = '6tv0j5n1nifgmcidqe08gsrblodq1u';

const topClipsUrl = 'https://api.twitch.tv/kraken/clips/top';
const headers = {'Client-ID': twitchClientKey, 'Accept': 'application/vnd.twitchtv.v5+json'};

const getTopClips = (req, res) => {
    axios.get(`${topClipsUrl}?limit=10`,
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
    axios
        .get(`${topClipsUrl}?game=${game}&limit=10`,
            {headers})
        .then(response => {
            let streams = response.data;
            res.send(streams);
        }).catch((err) => {
            console.log('why you error', err);
        });
};

const getClipsByBroadcaster = (req, res) => {
    const channel = req.params.channel;
    axios
        .get(`${topClipsUrl}?channel=${channel}&limit=10`,
            {headers})
        .then(response => {
            let streams = response.data;
            res.send(streams);
        }).catch((err) => {
        console.log('why you error', err);
    });
};

exports.getTopClips = getTopClips;
exports.getClipsByGame = getClipsByGame;
exports.getClipsByBroadcaster = getClipsByBroadcaster;
