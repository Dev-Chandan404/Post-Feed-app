import React, { useState, useEffect } from 'react'
import axios from "axios"
const Feed = () => {
    const [posts, setPosts] = useState([
        {
            _id: "1",
            caption: "My first post",
            image: "https://wallpapers.com/images/hd/iron-man-tony-stark-ouqxo5w2b59h0042.jpg",
            caption: "Iron Man",
        }
    ])
    useEffect(() => {

        axios.get("https://post-feed-backend.onrender.com/posts")
            .then((res) => {
                setPosts(res.data.posts)
            })
    }, [])
    return (
        <section className='feed-section'>
            <h1>Feed</h1>
            {
                posts.length > 0 ? (
                    posts.map((post) => (
                        <div key={post._id}
                            className='post-card'>
                            <img src={post.image} alt={post.caption} />
                            <p>{post.caption}</p>
                        </div>
                    ))
                ) : (
                    <h1>No posts available</h1>
                )
            }
        </section>
    )
}
export default Feed
