import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:3024',
    headers: {
        authorization: 'Bearer v3ryt0ps3cr3tt0k3n#432'
    }
});

export default http;
