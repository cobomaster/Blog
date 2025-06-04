// src/pages/PostsPage.jsx
import React, { useState, useEffect } from 'react';
import initialPosts from '../data/posts';
import { Link } from 'react-router-dom';
import NewPostForm from '../components/NewPostForm';
import './Posts.css';

export default function PostsPage() {
    const [posts, setPosts] = useState(() => {
        const saved = localStorage.getItem('posts');
        return saved ? JSON.parse(saved) : initialPosts;
    });

    useEffect(() => {
        localStorage.setItem('posts', JSON.stringify(posts));
    }, [posts]);

    const handleAddPost = (newPost) => {
        setPosts([newPost, ...posts]);
    };

    const sortedPosts = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));

    return (
        <div className='posts-container'>
            <NewPostForm onAddPost={handleAddPost} />
            <h2>Artículos del blog</h2>
            {sortedPosts.map((post) => (
                <div className='post' key={post.id}>
                    <h3 className='post-title'>
                        <Link to={`/posts/${post.id}`}>
                            {post.title}
                        </Link>
                    </h3>
                    <p className='post-summary'>{post.summary}</p>
                    {post.date && (
                        <p className='post-date'>
                            Publicado el {new Date(post.date).toLocaleDateString()}
                        </p>
                    )}
                </div>
            ))}
        </div>
    );
}
