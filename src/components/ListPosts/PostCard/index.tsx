import { useParams } from 'react-router-dom';
import { PostDataType } from '../../../interfaces';
import { getTimeDiff } from '../../../utils/getTimeDiff';
import {
  BookCardBody,
  BookCardBodyHeader,
  BookCardBodyHeaderPostedTime,
  BookCardBodyHeaderUsername,
  BookCardBodyPostContent,
  BookCardBodyPostText,
  BookCardContainer,
  BookCardHeader,
  BookCardHeaderIcons,
  BookCardHeaderTitle,
} from './styles';
import { MdDeleteForever } from 'react-icons/md';
import { FaRegEdit } from 'react-icons/fa';
import { useState } from 'react';
import { Modal } from '../../Modal';
import { modalTypeEnum } from '../../../utils/enum';

export type PostCardProps = {
  post: PostDataType;
  onClick?: () => void;
};

export function PostCard({ post, onClick }: PostCardProps) {
  const params = useParams();
  const username = params.username;

  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [isEditModal, setIsEditModal] = useState(false);

  return (
    <BookCardContainer onClick={onClick}>
      <BookCardHeader>
        <BookCardHeaderTitle>{post.title}</BookCardHeaderTitle>
        {username === post.username && (
          <BookCardHeaderIcons>
            <MdDeleteForever
              size={30}
              className="icon-pressable"
              onClick={() => setIsDeleteModal(true)}
            />
            <FaRegEdit
              size={30}
              className="icon-pressable"
              onClick={() => setIsEditModal(true)}
            />
          </BookCardHeaderIcons>
        )}
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
        <BookCardBodyPostContent>
          <BookCardBodyPostText>{post.content}</BookCardBodyPostText>
        </BookCardBodyPostContent>
      </BookCardBody>
      {isDeleteModal && <Modal type={modalTypeEnum.DELETE_POST} post={post} />}
      {isEditModal && <Modal type={modalTypeEnum.EDIT_POST} post={post} />}
    </BookCardContainer>
  );
}
