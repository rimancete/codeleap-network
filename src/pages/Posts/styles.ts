import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 385px;
  width: 100%;
`;
export const HomeContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 0 ${({ theme }) => theme.spacings.medium};
  width: 50%;
  @media ${({ theme }) => theme.media.lteMedium} {
    width: 80%;
  }
  @media ${({ theme }) => theme.media.lteSmall} {
    width: 100%;
  }
`;
export const HomeContainerPageSelectorContent = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;
