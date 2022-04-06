import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { env } from '../../environments';
import {
  LoginModalContainer,
  LoginModalBackground,
  LoginModalContent,
  LoginModalContentHeader,
  LoginModalContentTitleText,
  LoginModalContentBody,
  LoginModalForm,
  LoginModalFormUsernameLabel,
  LoginModalFormUsernameInput,
  LoginModalFormConfirmButton,
  LoginModalFormButtonDiv,
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
              <LoginModalFormUsernameLabel>
                Please enter your username
              </LoginModalFormUsernameLabel>
              <LoginModalFormUsernameInput
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <LoginModalFormButtonDiv>
                <LoginModalFormConfirmButton
                  type="submit"
                  disabled={!username && true}
                >
                  ENTER
                </LoginModalFormConfirmButton>
              </LoginModalFormButtonDiv>
            </LoginModalForm>
          </LoginModalContentBody>
        </LoginModalContent>
      </LoginModalBackground>
    </LoginModalContainer>
  );
}
