import { PostsContainer } from './styles';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { store } from '../../redux/store';
import { useState } from 'react';
import { loadPosts } from '../../redux/reducers';
import { PostCard } from './PostCard';

export function ListPosts() {
  const state = useAppSelector(store.getState);
  const dispatch = useAppDispatch();

  useState(() => {
    dispatch(loadPosts());
  });

  console.log('state', state);
  return (
    <PostsContainer>
      {state.posts.value.map((post, index) => (
        <PostCard key={index} post={post} />
      ))}
    </PostsContainer>
  );
}
