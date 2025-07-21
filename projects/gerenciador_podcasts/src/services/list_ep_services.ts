import { repoPodcast } from "../repositories/podcasts_repo";


export const serviceListEp = async () => {
  const data = await repoPodcast()
  return data;
};
