// import './App.css';

// function App() {
//   return (
//     <main>
//       <h1>Reddit Mini</h1>
//       <p>vite + react is working.</p>
//     </main>
//   );
// }

// export default App;



import { useEffect, useState } from 'react';
import { getPostsBySubreddit } from './api/redditApi';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState('Loading Reddit posts...');

  useEffect(() => {
    getPostsBySubreddit('popular')
      .then((postsFromReddit) => {
        setPosts(postsFromReddit);
        setStatus('API test successful');
        console.log(postsFromReddit);
      })
      .catch((error) => {
        setStatus(`API test failed: ${error.message}`);
        console.error(error);
      });
  }, []);

  return (
    <main>
      <h1>Reddit Mini</h1>
      <p>{status}</p>
      <p>Fetched posts: {posts.length}</p>

      <ul>
        {posts.slice(0, 5).map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </main>
  );
}

export default App;



// import { useEffect, useState } from 'react';
// import { getPostsBySubreddit, searchPosts } from './api/redditApi';
// import './App.css';

// function App() {
//   const [posts, setPosts] = useState([]);
//   const [status, setStatus] = useState('Loading mock Reddit posts...');

//   useEffect(() => {
//     getPostsBySubreddit('popular')
//       .then((postsFromApi) => {
//         setPosts(postsFromApi);
//         setStatus('Mock API test successful');
//         console.log(postsFromApi);
//       })
//       .catch((error) => {
//         setStatus(`Mock API test failed: ${error.message}`);
//         console.error(error);
//       });

//     searchPosts('react').then((results) => {
//       console.log('Search test:', results);
//     });
//   }, []);

//   return (
//     <main>
//       <h1>Reddit Mini</h1>
//       <p>{status}</p>
//       <p>Fetched posts: {posts.length}</p>

//       <ul>
//         {posts.slice(0, 5).map((post) => (
//           <li key={post.id}>
//             r/{post.subreddit} — {post.title}
//           </li>
//         ))}
//       </ul>
//     </main>
//   );
// }

// export default App;