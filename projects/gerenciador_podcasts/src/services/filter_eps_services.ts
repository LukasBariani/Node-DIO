import { repoPodcast } from "../repositories/podcasts_repo"

export const serviceFilterEps = async (podcastName: string)=>{
    const data = await repoPodcast(podcastName)

    return data;
}