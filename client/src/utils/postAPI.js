import axios from "axios";

export default {
    getPosts: function() {
        return axios.get("/api/post");
    },
    getPost: function() {
        return axios.get("/api/post/" + id);
    },
    createPost: function() {
        return axios.post("/api/post");
    }
}