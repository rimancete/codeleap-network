import { useState } from 'react';
import { Button } from '../Button';
import { TextInput } from '../TextInput';
import { PostContent, PostContentTitle, PostForm } from './styles';

import { addOrEditPost } from '../../actions/axios';
import { useParams } from 'react-router-dom';
import { PostDataType } from '../../interfaces';
import { toIsoString } from '../../utils/getDateTimeIso';
import { Textarea } from '../TextArea';

import toast from 'react-hot-toast';
import { timer } from '../../lib/toast';

export function CreatePost() {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const params = useParams();
  const username = params.username;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data: PostDataType = {
      username,
      created_datetime: toIsoString(new Date()),
      title,
      content,
    };

    addOrEditPost(data)
      .then(() => {
        toast.success(`Post create successfully`, {
          duration: timer().success,
        });
        setTimeout(() => window.location.reload(), timer().success);
      })
      .catch(() => {
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
        <Textarea
          label="Content"
          value={content}
          onChange={(e) => setContent((e.target as HTMLInputElement).value)}
        />
        <Button
          inputValue={title && content ? true : false}
          label="CREATE"
          isWhite={false}
        />
      </PostForm>
    </PostContent>
  );
}
