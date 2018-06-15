import { BACKEND_ENDPOINT } from './../constants';
import axios from 'axios';

class APIClient {
    constructor(endpoint) {
        this.client = axios.create({
            baseURL: endpoint,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
                'Access-Control-Allow-Headers': '*'
            },
        });
    }

    async getClipsByGame({ route, period }) {
        const url = (period) ? `/clips/games/${route}?period=${period}` : `/clips/games/${route}`;
        const res = await this.client.get(url);
        return res.data;
    }

    async getClipsByChannel({ route, period }) {
        const url = (period) ?  `/clips/channels/${route}?period=${period}`: `/clips/channels/${route}`;
        const res = await this.client.get(url);
        return res.data;
    }

    async getListOfGames() {
        const res = await this.client.get('/games');
        return res.data;
    }

    async getTrendingClips() {
        const res = await this.client.get('/clips/trending');
        return res.data;
    }

    async getAllChannels() {
        const res = await this.client.get('/channels');
        return res.data;
    }

    async searchGames({ queryGames }) {
        const res = await this.client.get(`/search/games?query=${queryGames}`);
        return res.data;
    }

}

const client = new APIClient(`${BACKEND_ENDPOINT}`);
export default client;
