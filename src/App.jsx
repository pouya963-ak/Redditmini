
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsBySubreddit } from './store/redditSlice';
import './App.css';
import Header from './features/Header/Header.jsx';
import PostCard from './features/Post/postCard.jsx';
import Footer from './features/Footer/footer.jsx';


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
        <h2 className='welcome_header'>
          Wellcome to your Hub 
        </h2>
        <section className='haji'>
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;