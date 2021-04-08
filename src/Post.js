import React from 'react';
import './Post.css';

function Post() {
    return (
        <div className="post">
            <h3>Username</h3>
            <img className="post__image" src="https://images.unsplash.com/photo-1615069433711-41e14f250182?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8NnNNVmpUTFNrZVF8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt="" />
            <h4 className="post__text"><strong>swapnilhota</strong> learning React</h4>
        </div>
    )
}

export default Post
