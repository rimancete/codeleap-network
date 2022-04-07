import styled, { css } from 'styled-components';

interface LoginModalContentProps {
  width: number;
}

export const LoginModalContainer = styled.div`
  display: flex;
  .modal-visible.modal-hide {
    display: none;
  }
`;

export const LoginModalBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.colors.modalBackground};
  position: fixed;
  top: 0px;
  left: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoginModalContent = styled.div<LoginModalContentProps>`
  flex-direction: column;
  max-width: ${(p) => (p.width < 768 ? '' : '500px')};
  ${({ theme }) => css`
    background: ${theme.colors.white};
    width: 85%;
    min-width: 288px;
    padding: 30px;
    box-shadow: rgba(0, 0, 0, 0.6) 0px 7px 29px 0px;
    display: flex;
  `}
`;
export const LoginModalContentHeader = styled.div`
  display: flex;
  align-items: left;
`;

export const LoginModalContentTitleText = styled.h1``;

export const LoginModalContentBody = styled.div`
  display: flex;
  width: 100%;
`;
export const LoginModalForm = styled.form``;

export const LoginModalFormButtonDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: ${({ theme }) => theme.spacings.small};
`;
export const LoginModalFormConfirmButton = styled.button``;
