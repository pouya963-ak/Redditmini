const BASE_URL = 'https://www.reddit.com'

export async function getPostsBySubreddit(subreddit = 'popular') {
    const response = await fetch(`${BASE_URL}/t/${subreddit}.json`);

    if (!response.ok) {
        throw new Error('Failed to fetch Reddit posts');
    }

    const data = await response.json();

    return data.data.children.map((post) => post.data);
}

export async function searchPosts(searchTerm) {
    const response = await fetch(
        `${BASE_URL}/searchPosts.json?q=${encodeURIComponent(searchTerm)}`
    );

    if (!response.ok) {
        throw new Error('Failed to search Reddit posts');
    }

    const data = await response.json();

    return data.data.chidren.map((post) => post.data);
}