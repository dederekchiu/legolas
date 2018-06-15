const axios = require('axios');
const twitchClientKey = 'ttdi6mafhcp4ksk1zki28kxeep89p8';

const url = 'https://api.twitch.tv/kraken/streams';
const headers = {
    'Accept': 'application/vnd.twitchtv.v5+json',
    'Client-ID': twitchClientKey,
};

const getLiveStreamers = (req, res) => {
    axios
        .get(`${url}?limit=25`, {headers})
        .then((response) => {
            const data = response.data;
        })
        .catch((error) => {
            console.log('game error: ', error);
        });
};

exports.getLiveStreamers = getLiveStreamers;



