import styled, { css } from 'styled-components';

export const ModalContainer = styled.div`
  z-index: 9999;
  display: flex;
  .modal-visible.modal-hide {
    display: none;
  }
`;

export const ModalBackground = styled.div`
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

  z-index: 9999;
  .modal-visible.modal-hide {
    display: none;
  }
`;

export const ModalContent = styled.div`
  flex-direction: column;
  @media ${({ theme }) => theme.media.lteMinSmall} {
    max-width: 500px;
  }
  ${({ theme }) => css`
    background: ${theme.colors.white};
    width: 85%;
    min-width: 288px;
    padding: 30px;
    box-shadow: rgba(0, 0, 0, 0.6) 0px 7px 29px 0px;
    display: flex;
  `}
`;
export const ModalContentHeader = styled.div`
  display: flex;
  align-items: left;
  margin-bottom: ${({ theme }) => theme.spacings.small};
`;

export const ModalContentTitleText = styled.h1``;

export const ModalContentBody = styled.div`
  display: flex;
  width: 100%;
`;
export const ModalForm = styled.form``;

export const ModalFormButtonDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: ${({ theme }) => theme.spacings.small};
`;
export const ModalFormConfirmButton = styled.button``;
export const ModalContentBodyDeleteContent = styled.div`
  width: 100%;
`;
export const ModalContentBodyDeleteConfirm = styled.div``;
export const ModalContentBodyDeleteConfirmText = styled.p``;
