import axios from 'axios';

export default axios.create({
    baseURL: "https://api.unsplash.com/",
    headers:{
        Authorization: 'Client-ID 358124b1c6dc6c25632bc4f32b09978c962f98ddd3533cca402bacb712f7f35e'
    }
});