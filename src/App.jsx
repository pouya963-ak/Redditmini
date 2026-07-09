
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsBySubreddit } from './store/redditSlice';
import './App.css';

import Header from '/Users/pouya/Documents/Career/Projects3/Redditmini/src/features/Header/Header.jsx'

function App() {
  const dispatch = useDispatch();

  const posts = useSelector((state) => state.reddit.posts);
  const isLoading = useSelector((state) => state.reddit.isLoading);
  const hasError = useSelector((state) => state.reddit.hasError);
  const errorMessage = useSelector((state) => state.reddit.errorMessage);

  useEffect(() => {
    dispatch(fetchPostsBySubreddit('popular'));
  }, [dispatch]);

  if (isLoading) {
    return <main>Loading posts...</main>
  }

  return (
    <div className="app">
      <Header />

      <main>
        <p>Redux fetch successful</p>
        <p> Fethced posts: {posts.length} </p>
        <ul>
          {posts.slice(0, 5).map((post) => (
            <li key={post.id}>
              r/{post.subreddit} - {post.title}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;