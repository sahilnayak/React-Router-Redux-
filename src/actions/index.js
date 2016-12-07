import axios from 'axios';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=soopalation';

export function fetchPosts() {

    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
    return {
        type: 'FETCH_POSTS',
        action: request
    };
}