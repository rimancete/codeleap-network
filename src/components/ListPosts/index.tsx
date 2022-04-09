import { PostsContainer } from './styles';
import { PostCard } from './PostCard';
import { PostDataType } from '../../interfaces';

interface ListPostsProps {
  posts: PostDataType[];
}

export function ListPosts({ posts }: ListPostsProps) {
  return (
    <PostsContainer>
      {posts.map((post, index) => (
        <PostCard key={index} post={post} />
      ))}
    </PostsContainer>
  );
}
