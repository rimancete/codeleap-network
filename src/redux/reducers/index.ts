import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PostDataType } from '../../interfaces';
import { getPosts } from '../../actions/axios';
import { AppDispatch, AppThunk } from '../../redux/store';

export interface StateType {
  value: PostDataType[];
}

const initialState = { value: [] } as StateType;

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    load: (state, action: PayloadAction<PostDataType[]>) => {
      state.value = action.payload;
    },
  },
});

export const { load } = postSlice.actions;

export const loadPosts =
  (page: number): AppThunk =>
  async (dispatch: AppDispatch) => {
    const posts = await getPosts(page);
    dispatch(load(posts));
  };
export const selectPost = (state: StateType) => state.value;

export default postSlice.reducer;
