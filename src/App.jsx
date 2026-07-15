
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsBySubreddit } from './store/redditSlice';
import './App.css';
import Header from './features/Header/Header.jsx';
import PostCard from './features/Post/postCard.jsx';

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
        <section className='haji'>
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;