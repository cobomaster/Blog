import posts from '../data/posts';

export default function Posts() {
    return(
        <div>
            <h2> Articulos del blog </h2>
            {posts.map((post) => (
                <div className='post' key={post.id}>
                    <h3 className='post-title'> {post.title} </h3>
                    <p className='post-summary'> {post.summary} </p>
                </div>   
            ))}
        </div>
    );
}

