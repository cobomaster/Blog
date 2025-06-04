import React from 'react';
import { useParams } from 'react-router-dom';
import postsData from "../data/posts";
import "./PostDetail.css";

export default function PostDetail() {
    const { id }  = useParams();
    const post = postsData.find((p) => p.id === parseInt(id));

    if(!post) {
        return <h2>Articulo no encontrado</h2>;
    }

    return(
        <div className='post-detail-card'>
            <h2 className='post-detail-title'> {post.title} </h2>
            <p className='post-detail-content'> {post.content} </p>
        </div>
    );
}
