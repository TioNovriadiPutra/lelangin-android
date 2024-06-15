import { useRecoilValue } from "recoil";
import useControllerMutation from "../hooks/useControllerMutation";
import useAuctionModel from "../models/auctionModel";
import { currentCommunityState } from "../store/pageState";

const useAuctionController = () => {
  const { useGetAuctionsByCommunity } = useAuctionModel();

  const currentCommunity = useRecoilValue(currentCommunityState);

  const { authToken, handleMutate, handleSuccess, handleError, handleSettled } =
    useControllerMutation();

  const useGetAuctionsByCommunityQuery = () => {
    const { data, isLoading, isError, error } = useGetAuctionsByCommunity(
      authToken,
      currentCommunity
    );

    let auctionData = [];

    if (!isLoading) {
      if (!isError) {
        auctionData = data.data;
      } else {
        handleError(error);
      }
    }

    return {
      auctionData,
      isLoading,
    };
  };

  return {
    useGetAuctionsByCommunityQuery,
  };
};

export default useAuctionController;
