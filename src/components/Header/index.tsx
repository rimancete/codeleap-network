import { FiLogOut } from 'react-icons/fi';
import { useNavigate, useParams } from 'react-router-dom';
import { env } from '../../environments';
import {
  HeaderContainer,
  HeaderTitle,
  UserDataContent,
  UserDataContentGreetings,
  UserDataContentGreetingsText,
} from './styles';

export function Header() {
  const params = useParams();
  const username = params.username;
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <HeaderTitle>Codeleap Network</HeaderTitle>
      <UserDataContent>
        <UserDataContentGreetings>
          <UserDataContentGreetingsText>
            {'Hello '} {`@${username} !`}
          </UserDataContentGreetingsText>
        </UserDataContentGreetings>
        <FiLogOut
          onClick={() => navigate(`${env.ROUTER_UTILS.base.home}`)}
          size={40}
          className="icon-pressable"
          style={{ padding: 8 }}
        />
      </UserDataContent>
    </HeaderContainer>
  );
}
