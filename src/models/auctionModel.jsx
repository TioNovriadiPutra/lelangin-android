import { useQuery } from "react-query";
import { getAuctionsByCommunity } from "../services/auctionService";

const useAuctionModel = () => {
  const useGetAuctionsByCommunity = (token, id) => {
    return useQuery({
      queryKey: ["getAuctionsByCommunity"],
      queryFn: () => getAuctionsByCommunity(token, id),
    });
  };

  return {
    useGetAuctionsByCommunity,
  };
};

export default useAuctionModel;
