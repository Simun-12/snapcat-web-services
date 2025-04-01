import axios from 'axios';

const API_KEY = 'live_dmnjtXNxNFTS63TJotFbDPQVWQQJ4SXjcEOw7adM0wBJb8DmxRjJVaeVTpaPAPrX';
const BASE_URL = 'https://api.thecatapi.com/v1/images/search?limit=10';

export const fetchCatSnap = async () => {
    try {
        const response = await axios.get(BASE_URL, {
            headers: {
                'x-api-key': API_KEY,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching cat images:', error);
        throw error;
    }
};