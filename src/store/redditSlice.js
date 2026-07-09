// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit ';
// import {
//     getPostBySubreddit,
//     searchPosts,
//     getPostbyId,
//     getPostsBySubreddit
// } from '../api/redditApi';

// export const fetchPostsBySubreddit = createAsyncThunk(
//     'reddit/fetchPostsBySubreddit',
//     async (subreddit) => {
//         const posts = await getPostsBySubreddit(subreddit);
//         return posts;
//     }
// );

// export const fetchPostsBySearchTerm = createAsyncThunk(
//     'reddit/fetchPostsBySearchTerm',
//     async (searchterm) => {
//         const posts = await searchPosts(searchterm);
//         return posts;
//     }
// );



import { createSlice } from '@reduxjs/toolkit';

const redditSlice = createSlice({
    name: 'reddit',
    initialState: {
        posts: [],
        isLoaded: false,
        hasError: false,
        ErrorMessage: '',
    },
    reducers: {},
});

export default redditSlice.reducer;