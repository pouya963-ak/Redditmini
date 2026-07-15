import './postCard.css';

function PostCard({ post }) {
    const hasImage = post.post_hint === 'image';

    return (
        <div className='post-card'>
            <div className='post-card__meta'>
                r/{post.subreddit} . posted by {post.author}
            </div>
            <h2 className='post-card__title'>{post.title}</h2>

            {hasImage && (
                <img
                  className='post-card__image'
                  src={post.image || post.thumbnail}
                  alt={post.title}
                 />
            )}

            {post.selftext && (
                <p className='post-card__text'>{post.selftext}</p>
            )}
            

        </div>
    )
}