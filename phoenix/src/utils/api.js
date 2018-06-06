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

    async getClips({ route }) {
        console.log('route', route);
        const res = await this.client.get(`${route}`);
        console.log('sadasdasdas: ', res.data);
        return res.data;
    }
}

const client = new APIClient(`${BACKEND_ENDPOINT}/clips`);
export default client;