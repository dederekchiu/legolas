const axios = require('axios');
const twitchClientKey = 'ttdi6mafhcp4ksk1zki28kxeep89p8';

const url = 'https://api.twitch.tv/kraken/games/top';
const headers = {
    'Accept': 'application/vnd.twitchtv.v5+json',
    'Client-ID': twitchClientKey,
}
const getTopGames = (req, res) => {
    axios
        .get(`${url}?limit=100`, {headers})
        .then((response) => {
            const listOfGames = [];
            const games = response.data.top;
            for (let i = 0; i < games.length; i++) {
                const name = games[i].game.name;
                const icon = games[i].game.box.large;
                const nameIconMap = {};
                nameIconMap[name] = icon;
                listOfGames.push(nameIconMap);
            }
            res.send({games: listOfGames});
        })
        .catch((error) => {
            console.log('game error: ', error);
        })
};

exports.getTopGames = getTopGames;