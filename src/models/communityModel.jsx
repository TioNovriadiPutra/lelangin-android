import { useQuery } from "react-query";
import { getCommunities } from "../services/communityService";

const useCommunityModel = () => {
  const useGetCommunities = (token) => {
    return useQuery({
      queryKey: ["getCommunities"],
      queryFn: () => getCommunities(token),
    });
  };

  return {
    useGetCommunities,
  };
};

export default useCommunityModel;
