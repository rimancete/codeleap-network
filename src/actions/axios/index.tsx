import axios from 'axios';
import { PostDataType } from '../../interfaces';

const baseUrl = 'https://dev.codeleap.co.uk/careers/';

export async function getPosts(): Promise<PostDataType[]> {
  const response = await axios.get(baseUrl);
  return response.data.results;
}
