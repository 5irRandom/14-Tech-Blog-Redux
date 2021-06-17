import React, { useEffect } from 'react';
import API from "./../utils/postAPI";

function Dashboard() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        loadPosts()
    }, [])

    function loadPosts() {
        API.getPosts()
        .then(res => setPosts(res.data))
        .catch(err => console.log(err));
    };

    return (
        <div style={{backgroundColor:'lightblue', height: '100vh'}}>
            {/* insert map function to display all posts in order newest -> oldest */}
            <List>
                {posts.map(posts)}
            </List>
        </div>
    )
}

export default Dashboard;