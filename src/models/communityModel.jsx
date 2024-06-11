import { useQuery } from "react-query";
import { getCommunities, getCommunityPic } from "../services/communityService";

const useCommunityModel = () => {
  const useGetCommunities = (token) => {
    return useQuery({
      queryKey: ["getCommunities"],
      queryFn: () => getCommunities(token),
    });
  };

  const useGetCommunityPic = (token, url) => {
    return useQuery({
      queryKey: ["getCommunityPic"],
      queryFn: () => getCommunityPic(token, url),
    });
  };

  return {
    useGetCommunities,
    useGetCommunityPic,
  };
};

export default useCommunityModel;
