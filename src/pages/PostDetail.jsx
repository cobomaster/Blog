import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import initialPosts from "../data/posts";
import "./PostDetail.css";

export default function PostDetail() {
  const { id } = useParams();
  const postId = Number(id);

  const [posts, setPosts] = useState(() => {
    const saved = localStorage.getItem("posts");
    return saved ? JSON.parse(saved) : initialPosts;
  });

  const post = posts.find((p) => p.id === postId);

  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(post ? post.content : "");

  useEffect(() => {
    if (!isEditing && post) {
      const updatedPosts = posts.map((p) =>
        p.id === postId ? { ...p, content } : p
      );
      setPosts(updatedPosts);
      localStorage.setItem("posts", JSON.stringify(updatedPosts));
    }
  }, [isEditing]);

  if (!post) {
    return (
      <div className="post-detail-container">
        <h2 className="post-detail-title">Artículo no encontrado</h2>
        <Link to="/posts" className="post-detail-link">Volver a posts</Link>
      </div>
    );
  }

  return (
    <div className="post-detail-container">
      <h2 className="post-detail-title">{post.title}</h2>
      <p className="post-detail-date">
        Publicado el {new Date(post.date).toLocaleDateString()}
      </p>

      {!isEditing && (
        <>
          <div className="post-detail-content-box">
            {content || <em>Sin contenido por el momento.</em>}
          </div>
          <button
            className="post-detail-button-edit"
            onClick={() => setIsEditing(true)}
            aria-label="Editar contenido"
          >
            🖊️ Editar contenido
          </button>
        </>
      )}

      {isEditing && (
        <>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={12}
            className="post-detail-textarea"
            aria-label="Editar contenido del artículo"
          />
          <div className="post-detail-button-group">
            <button
              className="post-detail-button post-detail-button-save"
              onClick={() => setIsEditing(false)}
              aria-label="Guardar contenido"
            >
              💾 Guardar
            </button>
            <button
              className="post-detail-button post-detail-button-cancel"
              onClick={() => {
                setContent(post.content);
                setIsEditing(false);
              }}
              aria-label="Cancelar edición"
            >
              ❌ Cancelar
            </button>
          </div>
        </>
      )}

      <Link to="/posts" className="post-detail-link">
        ← Volver a posts
      </Link>
    </div>
  );
}
