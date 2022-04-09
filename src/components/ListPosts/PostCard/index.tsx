import { useParams } from 'react-router-dom';
import { PostDataType } from '../../../interfaces';
import { getTimeDiff } from '../../../utils/getTimeDiff';
import {
  PostCardBody,
  PostCardBodyHeader,
  PostCardBodyHeaderPostedTime,
  PostCardBodyHeaderUsername,
  PostCardBodyPostContent,
  PostCardBodyPostText,
  PostCardContainer,
  PostCardHeader,
  PostCardHeaderIcons,
  PostCardHeaderTitle,
} from './styles';
import { MdDeleteForever } from 'react-icons/md';
import { FaRegEdit } from 'react-icons/fa';
import { useState } from 'react';
import { Modal } from '../../Modal';
import { modalTypeEnum } from '../../../utils/enum';
import { serializeText } from '../../../utils/serializeString';

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
    <PostCardContainer onClick={onClick}>
      <PostCardHeader>
        <PostCardHeaderTitle>
          {serializeText(post.title, window.innerWidth)}
        </PostCardHeaderTitle>
        {username === post.username && (
          <PostCardHeaderIcons>
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
          </PostCardHeaderIcons>
        )}
      </PostCardHeader>
      <PostCardBody>
        <PostCardBodyHeader>
          <PostCardBodyHeaderUsername>
            {'@'}
            {serializeText(post.username, window.innerWidth)}
          </PostCardBodyHeaderUsername>
          <PostCardBodyHeaderPostedTime>
            {getTimeDiff(new Date(), new Date(`${post.created_datetime}`))}
          </PostCardBodyHeaderPostedTime>
        </PostCardBodyHeader>
        <PostCardBodyPostContent>
          <PostCardBodyPostText>{post.content}</PostCardBodyPostText>
        </PostCardBodyPostContent>
      </PostCardBody>
      {isDeleteModal && <Modal type={modalTypeEnum.DELETE_POST} post={post} />}
      {isEditModal && <Modal type={modalTypeEnum.EDIT_POST} post={post} />}
    </PostCardContainer>
  );
}
