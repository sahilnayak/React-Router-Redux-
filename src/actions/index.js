import axios from 'axios';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=soopalation';

export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
    return {
        type: 'FETCH_POSTS',
        payload: request
    };
}

export function createPost(props) {
    console.log('Ive been run')
    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, props);
    return {
        type: 'CREATE_POSTS',
        payload: request
    };
}