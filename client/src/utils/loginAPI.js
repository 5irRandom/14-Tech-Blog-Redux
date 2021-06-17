import axios from "axios";

export default {
    getUser: function() {
        return axios.get("/api/signin");
    },
    createUser: function() {
        return axios.post("/api/signin");
    }
}