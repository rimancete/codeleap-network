import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { env } from '../../environments';
import { modalTypeEnum } from '../../utils/enum';
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
  LoginModalContentBodyDeleteConfirm,
  LoginModalContentBodyDeleteConfirmText,
} from './styles';

interface ModalProps {
  type: modalTypeEnum;
}

export function Modal({ type }: ModalProps) {
  const [username, setUsername] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`${env.ROUTER_UTILS.base.posts}/${username}`);
  };

  const handleClose = async () => {
    document.querySelector('.modal-visible')?.classList.add('modal-hide');
  };

  useEffect(() => {
    document.querySelector('.modal-visible')?.classList.remove('modal-hide');
    return () => {
      document.querySelector('.modal-visible')?.classList.add('modal-hide');
    };
  }, []);

  return (
    <LoginModalContainer>
      <LoginModalBackground
        onClick={() => type !== modalTypeEnum.LOGIN && handleClose()}
        className={type !== modalTypeEnum.LOGIN ? 'modal-visible' : ''}
      >
        <LoginModalContent
          onClick={(e) => e.stopPropagation()}
          width={window.innerWidth}
        >
          {type === modalTypeEnum.LOGIN && (
            <LoginModalContentHeader>
              <LoginModalContentTitleText>
                Welcome to CodeLeap network!
              </LoginModalContentTitleText>
            </LoginModalContentHeader>
          )}
          <LoginModalContentBody>
            {type !== modalTypeEnum.DELETE_POST && (
              <LoginModalForm onSubmit={handleSubmit}>
                <TextInput
                  label={
                    type === modalTypeEnum.LOGIN
                      ? 'Please enter your username'
                      : 'Title'
                  }
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <Button
                  inputValue={username ? true : false}
                  label="ENTER"
                  isWhite={false}
                />
              </LoginModalForm>
            )}
            {type === modalTypeEnum.DELETE_POST && (
              <LoginModalContentBodyDeleteConfirm>
                <LoginModalContentBodyDeleteConfirmText>
                  Are you sure you want to delete this item?
                </LoginModalContentBodyDeleteConfirmText>
              </LoginModalContentBodyDeleteConfirm>
            )}
          </LoginModalContentBody>
        </LoginModalContent>
      </LoginModalBackground>
    </LoginModalContainer>
  );
}
