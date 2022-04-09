import { Header } from '../../components/Header';
import { CreatePost } from '../../components/CreatePost';
import {
  HomeContainer,
  HomeContainerPageSelectorContent,
  HomeContent,
} from './styles';
import { ListPosts } from '../../components/ListPosts';
import { useCallback, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { loadPosts } from '../../redux/reducers';
import { store } from '../../redux/store';
import { PageSelector } from '../../components/PageSelector';

export function Posts() {
  const [page, setPage] = useState(0);

  const state = useAppSelector(store.getState);

  const dispatch = useAppDispatch();

  const listPosts = useCallback(
    async (page) => {
      dispatch(loadPosts(page));
    },
    [dispatch],
  );

  useEffect(() => {
    listPosts(page);
  }, [listPosts, page]);

  return (
    <HomeContainer>
      <Header />
      <HomeContent>
        <CreatePost />
        <HomeContainerPageSelectorContent>
          <PageSelector
            page={page}
            onBeforePage={() => page > 0 && setPage((prevPage) => prevPage - 1)}
            onNextPage={() =>
              state.posts.value.length === 10 &&
              setPage((prevPage) => prevPage + 1)
            }
            postsOnPage={state.posts.value.length}
          />
        </HomeContainerPageSelectorContent>
        <ListPosts posts={state.posts.value} />
      </HomeContent>
    </HomeContainer>
  );
}
