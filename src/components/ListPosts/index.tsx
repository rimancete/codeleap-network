import { PostsContainer } from './styles';
import { useAppSelector } from '../../redux/hooks';
import { store } from '../../redux/store';
import { PostCard } from './PostCard';
import { PostDataType } from '../../interfaces';

interface ListPostsProps {
  posts: PostDataType[];
}

export function ListPosts({ posts }: ListPostsProps) {
  const state = useAppSelector(store.getState);

  return (
    <PostsContainer>
      {posts.map((post, index) => (
        <PostCard key={index} post={post} />
      ))}
    </PostsContainer>
  );
}
