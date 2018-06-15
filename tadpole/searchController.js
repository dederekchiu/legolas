const axios = require('axios');
const twitchClientKey = 'ttdi6mafhcp4ksk1zki28kxeep89p8';

const searchChannelUrl = 'https://api.twitch.tv/kraken/search/channels';
const searchGameUrl = 'https://api.twitch.tv/kraken/search/games';
const headers = {
    'Accept': 'application/vnd.twitchtv.v5+json',
    'Client-ID': twitchClientKey,
};

const getGamesWithSearch = (req, res) => {
    const query = req.query.query;
    const url = `${searchGameUrl}?query=${query}`;
    console.log('QUERY', url);
    axios
        .get(`${searchGameUrl}?query=${query}`, {headers})
        .then((response) => {
            const data = response.data;
            res.send(data);
        })
        .catch((error) => {
            console.log('game error: ', error);
        });
};

exports.getGamesWithSearch = getGamesWithSearch;
