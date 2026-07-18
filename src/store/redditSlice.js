import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getPostsBySubreddit } from '../api/redditApi';

export const fetchPostsBySubreddit = createAsyncThunk(
    'reddit/fetchPostsBySubreddit',
    async (subreddit) => {
        const posts = await getPostsBySubreddit(subreddit);
        return posts;
    }
)


const redditSlice = createSlice({
    name: 'reddit',
    initialState: {
        posts: [],
        isLoaded: false,
        hasError: false,
        ErrorMessage: '',
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
          state.isloading = true;
          state.hasError = false;
          state.ErrorMessage = '';
        })
        .addCase(fetchPostsBySubreddit.fulfilled, (state, action) => {
            state.isloading = false;
            state.posts = action.payload;
        })
        .addCase(fetchPostsBySubreddit.rejected, (state, action) => {
            state.isloading = false;
            state.hasError = true;
            state.ErrorMessage = action.error.message;
        });
    },
});

export const { setSelectedSubreddit } = redditSlice.actions;
export default redditSlice.reducer;