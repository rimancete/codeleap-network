import { useParams } from 'react-router-dom';
import { Header } from '../../components/Header';
import { CreatePost } from '../../components/CreatePost';
import { HomeContainer, HomeContent } from './styles';

export function Posts() {
  return (
    <HomeContainer>
      <Header />
      <HomeContent>
        <CreatePost />
      </HomeContent>
    </HomeContainer>
  );
}
