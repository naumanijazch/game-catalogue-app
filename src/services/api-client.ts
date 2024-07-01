import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "f1cd0b1fc0114bb0b85c7754aef62842"
    }
})