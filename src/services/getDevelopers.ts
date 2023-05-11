import { DeveloperWithAvatar } from './types/dev-with-avatar.type';
import { DevelopersResponse } from '@/services/types/developers-response.type';
import sendApiRequest from './sendApiRequest';

export default async function getDevelopers(): Promise<DeveloperWithAvatar[]> {
  const { data } = await sendApiRequest<DevelopersResponse>('api/developers?populate=avatar');

  await new Promise(resolve => setTimeout(resolve, 2000000));

  return data
    .map(({ id, attributes }) => {
      const { avatar, name } = attributes;
      const avatarURL = avatar.data.attributes.url;

      //TODO: role ?

      return {
        id,
        avatar: `${process.env.BACKEND_ENDPOINT}${avatarURL}`,
        name,
      };
    })
    .sort((a, b) => a.name.localeCompare(b.name));
}
