import axios from "axios";

const instance = axios.create({
    baseURL: "https://superres-api.herokuapp.com/",
});

export default instance;