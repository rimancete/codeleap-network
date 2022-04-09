import { PageSelectorContainer, PageSelectorContainerText } from './styles';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface PageSelectorProps {
  onBeforePage: () => void;
  onNextPage: () => void;
  page: number;
  postsOnPage: number;
}

export function PageSelector({
  onBeforePage,
  onNextPage,
  page,
  postsOnPage,
}: PageSelectorProps) {
  return (
    <PageSelectorContainer>
      <FiChevronLeft
        size={35}
        className={page > 0 ? 'page-selector' : 'page-selector--disabled'}
        onClick={onBeforePage}
      />
      <PageSelectorContainerText>Page {page + 1}</PageSelectorContainerText>
      <FiChevronRight
        size={35}
        className={
          postsOnPage === 10 ? 'page-selector' : 'page-selector--disabled'
        }
        onClick={onNextPage}
      />
    </PageSelectorContainer>
  );
}
