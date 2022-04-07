import { PostDataType } from '../../../interfaces';
import { getTimeDiff } from '../../../utils/getTimeDiff';
import {
  BookCardBody,
  BookCardBodyHeader,
  BookCardBodyHeaderPostedTime,
  BookCardBodyHeaderUsername,
  BookCardContainer,
  BookCardHeader,
  BookCardHeaderTitle,
} from './styles';

export type PostCardProps = {
  post: PostDataType;
  onClick?: () => void;
};

export function PostCard({ post, onClick }: PostCardProps) {
  return (
    <BookCardContainer onClick={onClick}>
      <BookCardHeader>
        <BookCardHeaderTitle>{post.title}</BookCardHeaderTitle>
      </BookCardHeader>
      <BookCardBody>
        <BookCardBodyHeader>
          <BookCardBodyHeaderUsername>
            {'@'}
            {post.username}
          </BookCardBodyHeaderUsername>
          <BookCardBodyHeaderPostedTime>
            {getTimeDiff(new Date(), new Date(`${post.created_datetime}`))}
          </BookCardBodyHeaderPostedTime>
        </BookCardBodyHeader>
      </BookCardBody>
    </BookCardContainer>
  );
}
