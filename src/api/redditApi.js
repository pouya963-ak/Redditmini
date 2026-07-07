import { mockPosts } from './mockRedditData';

const MOCK_DELAY = 500;

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function normalizeText(text) {
  return text.toLowerCase().trim();
}

export async function getPostsBySubreddit(subreddit = 'popular') {
  await wait(MOCK_DELAY);

  if (subreddit === 'popular') {
    return mockPosts;
  }

  return mockPosts.filter((post) => post.subreddit === subreddit);
}

export async function searchPosts(searchTerm) {
  await wait(MOCK_DELAY);

  const normalizedSearchTerm = normalizeText(searchTerm);

  if (!normalizedSearchTerm) {
    return mockPosts;
  }

  return mockPosts.filter((post) => {
    return (
      normalizeText(post.title).includes(normalizedSearchTerm) ||
      normalizeText(post.author).includes(normalizedSearchTerm) ||
      normalizeText(post.subreddit).includes(normalizedSearchTerm) ||
      normalizeText(post.selftext).includes(normalizedSearchTerm)
    );
  });
}

export async function getPostById(postId) {
  await wait(MOCK_DELAY);

  return mockPosts.find((post) => post.id === postId);
}