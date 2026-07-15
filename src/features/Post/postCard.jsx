
import './postCard.css';

function PostCard({ post }) {
    const hasImage = post.post_hint === 'image';
    {hasImage && (
        <img
          className='post-card__image'
          src={post.image || post.thumbnail}
          alt={post.title}
         />
    )}
    {post.selftext && (
        <p classname="post-card__text">{post.selftext}</p>
    )}
    <div className='post-card__stats'>
        <span>{post.ups} upvotes</span>
        <span>{post.num_comments} comments</span>
    </div>
  return (
    <article className="post-card">
      <p>
        r/{post.subreddit} · posted by {post.author}
      </p>

      <h2>{post.title}</h2>
    </article>
  );
}

export default PostCard;