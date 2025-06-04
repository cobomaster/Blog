import React, { useState } from 'react';
import initialPosts from '../data/posts'; // Cambiar nombre import
import { Link } from 'react-router-dom';
import NewPostForm from '../components/NewPostForm';
import "./Posts.css";

export default function Posts() {   // Cambiar nombre función a Posts (mayúscula y distinto)
    const [posts, setPosts] = useState(initialPosts); // Aquí usas el array importado correctamente

    const handleAddPost = (newPost) => {
        setPosts([newPost, ...posts]);
    };

    return(
        <div className='posts-container'>
            <NewPostForm onAddPost={handleAddPost} />
            <h2> Articulos del blog </h2>
            {posts.map((post) => (
                <div className='post' key={post.id}>
                    <h3 className='post-title'>
                        <Link to={`/posts/${post.id}`}>
                            {post.title}
                        </Link> 
                    </h3>
                    <p className='post-summary'> {post.summary} </p>
                </div>   
            ))}
        </div>
    );
}
