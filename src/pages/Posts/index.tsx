import { useParams } from 'react-router-dom';
import { HomeContainer } from './styles';

export function Posts() {
  const params = useParams();
  const username = params.username;
  console.log('params', username);

  return (
    <HomeContainer>
      <h1>Posts</h1>
    </HomeContainer>
  );
}
