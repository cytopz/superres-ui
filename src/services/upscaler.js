import axios from "./axios";

const upscale = ({ img, upscale }) => {
    return axios.post("/upscale", { img, upscale })
}

export { upscale };