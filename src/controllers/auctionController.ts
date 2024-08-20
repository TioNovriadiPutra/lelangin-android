import { responseMapper } from "@helpers/mapper";
import useHelper from "@hooks/useHelper";
import {
  Auction,
  AuctionDetail,
  BidAuction,
} from "@interfaces/data/auctionInterface";
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
    useGetAuctionDetail,
    useGetAuctionDropdownMutation,
    useBidAuctionMutation,
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

  const useGetAuctionDetailService = (id: number) => {
    const { data, isLoading, isError, error } = useGetAuctionDetail(id);

    let finalData: AuctionDetail = {
      id: 0,
      auctionName: "",
      categoryName: "",
      buyNowPrice: 0,
      timer: "",
      highestBid: 0,
      description: "",
      profileId: 0,
      galleries: [],
    };

    if (isError) {
      onError(error);
    } else {
      if (data) {
        const convert = responseMapper<AuctionDetail>(data.data);

        finalData = convert;
      }
    }

    return {
      finalData,
      isLoading,
    };
  };

  const getAuctionDropdownMutation = useGetAuctionDropdownMutation();

  const bidAuctionMutation = useBidAuctionMutation();

  return {
    useGetUserAuctionsService,
    useGetAuctionsByCommunityService,
    useGetAuctionsByCategoryService,
    useGetAuctionDetailService,
    getAuctionDropdownService: () => getAuctionDropdownMutation.mutate(),
    bidAuctionService: (data: { data: BidAuction; id: number }) =>
      bidAuctionMutation.mutate(data),
  };
};

export default useAuctionController;
