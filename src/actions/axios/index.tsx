import axios from 'axios';
import { env } from '../../environments';
import { PostDataType } from '../../interfaces';

export async function getPosts(page: number): Promise<PostDataType[]> {
  const offset = page * 10;
  if (!offset) {
    const response = await axios.get(env.baseUrl);
    return response.data.results;
  } else {
    const response = await axios.get(`${env.baseUrl}?offset=${offset}`);
    return response.data.results;
  }
}

export async function addOrEditPost(
  data: PostDataType,
  isEdit?: boolean,
  dataId?: number,
): Promise<PostDataType> {
  if (!isEdit) {
    return await axios.post(env.baseUrl, data);
  } else {
    return await axios.patch(`${env.baseUrl}${dataId}`, data);
  }
}

export async function deletePost(data: PostDataType): Promise<PostDataType> {
  return await axios.delete(`${env.baseUrl}/${data.id}`);
}
