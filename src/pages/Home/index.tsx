import { Console } from 'console';
import { useState } from 'react';
import { LoginModal } from '../../components/LoginModal';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { loadPosts } from '../../redux/reducers';
import { store } from '../../redux/store';

export default function Home() {
  const state = useAppSelector(store.getState);
  const dispatch = useAppDispatch();

  useState(() => {
    dispatch(loadPosts());
  });

  return <LoginModal />;
}
