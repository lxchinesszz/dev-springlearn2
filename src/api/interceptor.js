import axios from 'axios';
if (import.meta.env.VITE_API_BASE_URL) {
    axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
}
//# sourceMappingURL=interceptor.js.map