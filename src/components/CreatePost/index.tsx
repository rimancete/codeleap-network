import { useState } from 'react';
import { Button } from '../Button';
import { TextInput } from '../TextInput';
import {
  ContentText,
  PostContent,
  PostContentTitle,
  PostForm,
  TextAreaContent,
  TextAreaLabel,
} from './styles';

import { addOrEditPost } from '../../actions/axios';
import { useNavigate, useParams } from 'react-router-dom';
import { PostDataType } from '../../interfaces';
import { env } from '../../environments';
import { toIsoString } from '../../utils/getDateTimeIso';

export function CreatePost() {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const params = useParams();
  const username = params.username;

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data: PostDataType = {
      username,
      created_datetime: toIsoString(new Date()),
      title,
      content,
    };

    addOrEditPost(data)
      .then((res) => {
        // show successfull post creation message
        console.log('res', res);
        navigate(`${env.ROUTER_UTILS.base.posts}/${username}`);
      })
      .catch((err) => {
        console.log('err', err);
        // show fail to create post message
      });
  };

  return (
    <PostContent width={window.innerWidth}>
      <PostContentTitle>What{"'"}s on your mind?</PostContentTitle>
      <PostForm onSubmit={handleSubmit}>
        <TextInput
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextAreaContent>
          <TextAreaLabel>Content</TextAreaLabel>
          <ContentText
            rows={2}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </TextAreaContent>
        <Button
          inputValue={title && content ? true : false}
          label="CREATE"
          isWhite={false}
        />
      </PostForm>
    </PostContent>
  );
}
