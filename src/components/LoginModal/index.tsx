import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { env } from '../../environments';
import { Button } from '../Button';
import { TextInput } from '../TextInput';
import {
  LoginModalContainer,
  LoginModalBackground,
  LoginModalContent,
  LoginModalContentHeader,
  LoginModalContentTitleText,
  LoginModalContentBody,
  LoginModalForm,
} from './styles';

// const handleClose = async () => {
//   document.querySelector('.modal-visible')?.classList.add('modal-hide');
// };

export function LoginModal() {
  const [username, setUsername] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`${env.ROUTER_UTILS.base.posts}/${username}`);
  };

  return (
    <LoginModalContainer>
      <LoginModalBackground
      // onClick={handleClose}
      // className="modal-visible"
      >
        <LoginModalContent
          onClick={(e) => e.stopPropagation()}
          width={window.innerWidth}
        >
          <LoginModalContentHeader>
            <LoginModalContentTitleText>
              Welcome to CodeLeap network!
            </LoginModalContentTitleText>
          </LoginModalContentHeader>
          <LoginModalContentBody>
            <LoginModalForm onSubmit={handleSubmit}>
              <TextInput
                label="Please enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Button
                inputValue={username ? true : false}
                label="ENTER"
                isWhite={false}
              />
            </LoginModalForm>
          </LoginModalContentBody>
        </LoginModalContent>
      </LoginModalBackground>
    </LoginModalContainer>
  );
}
