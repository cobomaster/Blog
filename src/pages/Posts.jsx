import posts from '../data/posts';
import { Link } from 'react-router-dom';
import "./Posts.css";

export default function Posts() {
    return(
        <div className='posts-container'>
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

