import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getPostsBySubreddit } from '../api/redditApi';

export const fetchPostsBySubreddit = createAsyncThunk(
    'reddit/fetchPostsBySubreddit',
    async (subreddit) => {
        const posts = await getPostsBySubreddit(subreddit);
        return posts;
    }
)

export const fetchSearchResults = createAsyncThunk(
    'reddit/searchPosts',
    async (searchTerm) => {
        const response = await searchPosts(searchTerm);
        return response;
    }
)

const redditSlice = createSlice({
    name: 'reddit',
    initialState: {
        posts: [],
        isLoading: false,
        hasError: false,
        errorMessage: '',
        selectedSubreddit: 'popular',
    },
    reducers: {
      setSelectedSubreddit: (state, action) => {
        state.selectedSubreddit = action.payload;
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchPostsBySubreddit.pending, (state) => {
          state.isLoading = true;
          state.hasError = false;
          state.errorMessage = '';
        })
        .addCase(fetchPostsBySubreddit.fulfilled, (state, action) => {
            state.isLoading = false;
            state.posts = action.payload;
        })
        .addCase(fetchPostsBySubreddit.rejected, (state, action) => {
            state.isLoading = false;
            state.hasError = true;
            state.errorMessage = action.error.message;
        })
        .addCase(fetchSearchResults.pending, (state) => {
            state.isLoading = true;
            state.hasError = false;
            state.errorMessage = '';
        })
        .addCase(fetchSearchResults.fulfilled, (state, action) => {
            state.isLoading = false;
            state.hasError = false;
            state.posts = action.payload;
        })
        .addCase(fetchSearchResults.rejected, (state, action) => {
            state.isLoading = false;
            state.hasError = true;
            state.errorMessage = action.error.message;
        })
    },
});

export const { setSelectedSubreddit } = redditSlice.actions;
export default redditSlice.reducer;