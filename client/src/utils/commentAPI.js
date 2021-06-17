import axios from "axios";

export default {
    getComments: function() {
        return axios.get("/api/comment");
    },
    createComment: function() {
        return axios.post("/api/comment");
    }
}