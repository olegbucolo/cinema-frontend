import axios from 'axios';

export default axios.create({
    baseURL: import.meta.env.VIET_RENDER_URL
});