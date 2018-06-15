const axios = require('axios');
const twitchClientKey = 'ttdi6mafhcp4ksk1zki28kxeep89p8';

const url = 'https://api.twitch.tv/kraken/search/channels';
const getChannelUrl = 'https://api.twitch.tv/kraken/channels/';
const headers = {
    'Accept': 'application/vnd.twitchtv.v5+json',
    'Client-ID': twitchClientKey,
};

const getAllChannels = (req, res) => {
    axios
        .get(`${url}?query=*&limit=20`, {headers})
        .then((response) => {
            res.send(response.data);
        })
        .catch((error) => {
            console.log('game error: ', error);
        });
};

const getChannelInfo = (req, res) => {
    axios
        .get(`${getChannelUrl}${req.params.channelId}`, {headers})
        .then((response) => {
            res.send(response.data);
        })
        .catch((error) => {
            console.log('get one channel error: ', error);
        });
};

exports.getChannelInfo = getChannelInfo;
exports.getTopChannels = getAllChannels;
