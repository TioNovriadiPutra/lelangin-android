import { responseMapper } from "@helpers/mapper";
import useHelper from "@hooks/useHelper";
import { Auction } from "@interfaces/data/auctionInterface";
import useAuctionModel from "@models/auctionModel";
import { currentCategoryState, currentCommunityState } from "@store/pageState";
import { useRecoilValue } from "recoil";

const useAuctionController = () => {
  const currentCommunity = useRecoilValue(currentCommunityState);
  const currentCategory = useRecoilValue(currentCategoryState);

  const { auth, onMutate, onSuccess, onError, onSettled } = useHelper();

  const {
    useGetUserAuctions,
    useGetAuctionsByCommunity,
    useGetAuctionsByCategory,
    useGetAuctionDropdownMutation,
  } = useAuctionModel(auth.token, onMutate, onSuccess, onError, onSettled);

  const useGetUserAuctionsService = () => {
    const { data, isLoading, isError, error } = useGetUserAuctions();

    let finalData: Auction[] = [];

    if (isError) {
      onError(error);
    } else {
      if (data) {
        const convertData = responseMapper<Auction[]>(data.data);

        finalData = convertData;
      }
    }

    return {
      finalData,
      isLoading,
    };
  };

  const useGetAuctionsByCommunityService = () => {
    const { data, isLoading, isError, error } =
      useGetAuctionsByCommunity(currentCommunity);

    let finalData: Auction[] = [];

    if (isError) {
      onError(error);
    } else {
      if (data) {
        const convertData = responseMapper<Auction[]>(data.data);

        finalData = convertData;
      }
    }

    return {
      finalData,
      isLoading,
    };
  };

  const useGetAuctionsByCategoryService = () => {
    const { data, isLoading, isError, error } =
      useGetAuctionsByCategory(currentCategory);

    let finalData: Auction[] = [];

    if (isError) {
      onError(error);
    } else {
      if (data) {
        const convertData = responseMapper<Auction[]>(data.data);

        finalData = convertData;
      }
    }

    return {
      finalData,
      isLoading,
    };
  };

  const getAuctionDropdownMutation = useGetAuctionDropdownMutation();

  return {
    useGetUserAuctionsService,
    useGetAuctionsByCommunityService,
    useGetAuctionsByCategoryService,
    getAuctionDropdownService: () => getAuctionDropdownMutation.mutate(),
  };
};

export default useAuctionController;
