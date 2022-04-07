import { Header } from '../../components/Header';
import { CreatePost } from '../../components/CreatePost';
import { HomeContainer, HomeContent } from './styles';
import { ListPosts } from '../../components/ListPosts';

export function Posts() {
  return (
    <HomeContainer>
      <Header />
      <HomeContent>
        <CreatePost />
        <ListPosts />
      </HomeContent>
    </HomeContainer>
  );
}
