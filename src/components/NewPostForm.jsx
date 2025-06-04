import React, { useState } from 'react';
import "./NewPostForm.css";

export default function NewPostForm({ onAddPost }){
    const [title, setTitle] = useState('');
    const [ summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title.trim() || !content.trim()){
            setError ("Titulo y contenido son obligatorios");
            return;
        }   

        const newPost = {
            id: Date.now().toString(),
            title, 
            summary, 
            content,
        };

        onAddPost(newPost);

        setTitle('');
        setSummary('');
        setContent('');
        setError('');
    };

    return (
        <form onSubmit={handleSubmit} className="new-post-form">
            <h2> Crear nuevo post </h2>
            {error && <p className="error">{error}</p>}
            <input 
            type="text"
            placeholder="Título"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />
            <input 
            type="text"
            placeholder="Resumen"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            />
            <textarea
            placeholder="Contenido"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            ></textarea>
            <button type="submit"> Publicar </button>
        </form>
    );
}