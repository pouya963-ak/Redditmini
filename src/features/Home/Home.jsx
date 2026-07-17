import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsBySubreddit } from '../../store/redditSlice';
import PostCard from '../Post/PostCard';
import './Home.css';

function Home() {
    const dispatch = useDispatch();

    const posts = useSelector((state) => state.reddit.posts);
    const isLoading = useSelector((state) => state.reddit.isLoading);
    const hasError = useSelector((state) => state.reddit.hasError);
    const errorMessage = useSelector((state) => state.reddit.errorMessage);

    useEffect(() => {
        dispatch(fetchPostsBySubreddit('popular'));
    }, [dispatch]);

    if (isLoading) {
        return <main className='home'>Loading Posts...</main>
    }

    if (hasError) {
        return (
            <main className='home'>
                Error: {errorMessage}
            </main>
        )
    }

    return (
        <main className='home'>
            <h2>Wellcome to your Hub!</h2>
            <section className='home__posts'>
                {posts.map((post) => (
                    <PostCard key={post.id} post={post} />
                ))}
            </section>
        </main>
    );
}

export default Home;