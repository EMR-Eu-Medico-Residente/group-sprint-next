import axios from 'axios';

export default async function sendRequest<T>(route: string): Promise<T> {
  const { data /* , status */ } = await axios.get<T>(`${process.env.BACKEND_ENDPOINT}/${route}`, {
    responseType: 'json',
    headers: {
      Authorization: `Bearer ${process.env.BACKEND_TOKEN}`,
    },
  });

  //check status?

  return data;
}
