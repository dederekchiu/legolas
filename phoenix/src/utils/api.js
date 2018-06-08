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

    async getClipsByGame({ route }) {
        const res = await this.client.get(`/clips/game/${route}`);
        return res.data;
    }

    async getClipsByBroadcaster({ route }) {
        const res = await this.client.get(`/clips/channels/${route}`);
        return res.data;
    }

    async getListOfGames() {
        const res = await this.client.get('/games');
        return res.data;
    }
}

const client = new APIClient(`${BACKEND_ENDPOINT}`);
export default client;
