import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addOrEditPost, deletePost } from '../../actions/axios';
import { env } from '../../environments';
import { PostDataType } from '../../interfaces';
import { modalTypeEnum } from '../../utils/enum';
import { Button } from '../Button';
import { Textarea } from '../TextArea';
import { TextInput } from '../TextInput';
import {
  ModalContainer,
  ModalBackground,
  ModalContent,
  ModalContentHeader,
  ModalContentTitleText,
  ModalContentBody,
  ModalForm,
  ModalContentBodyDeleteConfirm,
  ModalContentBodyDeleteConfirmText,
  ModalContentBodyDeleteContent,
  ModalFormButtonDiv,
} from './styles';

import toast from 'react-hot-toast';
import { timer } from '../../lib/toast';
interface ModalProps {
  type: modalTypeEnum;
  post?: PostDataType;
}

export function Modal({ type, post }: ModalProps) {
  const [username, setUsername] = useState<string>('');
  const [postTitle, setPostTitle] = useState<string>('');
  const [postContent, setPostContent] = useState<string>('');

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(`Login successfully`, {
      duration: timer().success,
    });
    setTimeout(
      () => navigate(`${env.ROUTER_UTILS.base.posts}/${username}`),
      timer().success,
    );
  };

  const handleClose = async () => {
    document.querySelector('.modal-visible')?.classList.add('modal-hide');
  };

  const handleEditPost = async (e: React.FormEvent) => {
    e.preventDefault();
    if (post) {
      const data: PostDataType = {
        title: post.title,
        content: post.content,
      };
      addOrEditPost(data, true, post.id)
        .then(() => {
          handleClose();
          toast.success(`Post successfully updated`, {
            duration: timer().success,
          });
          setTimeout(() => window.location.reload(), timer().success);
        })
        .catch(() => {
          toast.error(`Update Post failed`, {
            duration: timer().error,
          });
          setTimeout(() => window.location.reload(), timer().error);
        });
    }
  };

  const handleDeletePost = async () => {
    post &&
      deletePost(post)
        .then(() => {
          handleClose();
          toast.success(`Post successfully deleted`, {
            duration: timer().success,
          });
          setTimeout(() => window.location.reload(), timer().success);
        })
        .catch(() => {
          toast.error(`Delete Post failed`, {
            duration: timer().error,
          });
          setTimeout(() => window.location.reload(), timer().error);
        });
  };

  useEffect(() => {
    document.querySelector('.modal-visible')?.classList.remove('modal-hide');
    return () => {
      document.querySelector('.modal-visible')?.classList.add('modal-hide');
    };
  }, []);

  useEffect(() => {
    if (type !== modalTypeEnum.LOGIN && post) {
      setPostTitle(post.title);
      setPostContent(post.content);
    }
  }, [post, type]);

  return (
    <ModalContainer>
      <ModalBackground
        onClick={() => type !== modalTypeEnum.LOGIN && handleClose()}
        className={type !== modalTypeEnum.LOGIN ? 'modal-visible' : ''}
      >
        <ModalContent onClick={(e) => e.stopPropagation()}>
          <ModalContentHeader>
            <ModalContentTitleText>
              {type === modalTypeEnum.LOGIN
                ? 'Welcome to CodeLeap network!'
                : type === modalTypeEnum.EDIT_POST && 'Edit item'}
            </ModalContentTitleText>
          </ModalContentHeader>
          <ModalContentBody>
            {type === modalTypeEnum.LOGIN && (
              <ModalForm onSubmit={handleSubmit}>
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
              </ModalForm>
            )}
            {type === modalTypeEnum.DELETE_POST && (
              <ModalContentBodyDeleteContent>
                <ModalContentBodyDeleteConfirm>
                  <ModalContentBodyDeleteConfirmText>
                    Are you sure you want to delete this item?
                  </ModalContentBodyDeleteConfirmText>
                </ModalContentBodyDeleteConfirm>
                <ModalFormButtonDiv>
                  <Button
                    inputValue={true}
                    label="Cancel"
                    isWhite={true}
                    onClick={handleClose}
                  />
                  <Button
                    inputValue={true}
                    label="OK"
                    isWhite={true}
                    onClick={handleDeletePost}
                  />
                </ModalFormButtonDiv>
              </ModalContentBodyDeleteContent>
            )}
            {type === modalTypeEnum.EDIT_POST && (
              <ModalForm onSubmit={handleEditPost}>
                <TextInput
                  label="Title"
                  value={postTitle}
                  onChange={(e) => setPostTitle(e.target.value)}
                />
                <Textarea
                  label="Content"
                  value={postContent}
                  onChange={(e) =>
                    setPostContent((e.target as HTMLInputElement).value)
                  }
                />
                <Button
                  inputValue={postTitle && postContent ? true : false}
                  label="SAVE"
                  isWhite={false}
                />
              </ModalForm>
            )}
          </ModalContentBody>
        </ModalContent>
      </ModalBackground>
    </ModalContainer>
  );
}
