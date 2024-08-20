import { queryClient } from "@configs/client";
import { addAuctionForm } from "@constants/form";
import { responseMapper } from "@helpers/mapper";
import { BidAuction } from "@interfaces/data/auctionInterface";
import { Category } from "@interfaces/data/categoryInterface";
import { Community } from "@interfaces/data/communityInterface";
import { AppStackProps } from "@interfaces/navigationType";
import { useNavigation } from "@react-navigation/native";
import {
  addAuction,
  bidAuction,
  getAuctionDetail,
  getAuctionDropdown,
  getAuctionsByCategory,
  getAuctionsByCommunity,
  getUserAuctions,
} from "@services/auctionService";
import { showBidModalState } from "@store/pageState";
import { keepPreviousData, useMutation, useQuery } from "@tanstack/react-query";
import { useSetRecoilState } from "recoil";

const useAuctionModel = (
  token: string,
  onMutate: () => void,
  onSuccess: (message: string) => void,
  onError: (error: ApiErrorResponse) => void,
  onSettled: () => void
) => {
  const nav = useNavigation<AppStackProps>();

  const setBidModal = useSetRecoilState(showBidModalState);

  const useGetUserAuctions = () =>
    useQuery({
      queryKey: ["getUserAuctions"],
      queryFn: () => getUserAuctions(token),
    });

  const useGetAuctionsByCommunity = (community: number) =>
    useQuery({
      queryKey: ["getAuctionsByCommunity", { community }],
      queryFn: () => getAuctionsByCommunity(token, community),
      placeholderData: keepPreviousData,
    });

  const useGetAuctionsByCategory = (category: number) =>
    useQuery({
      queryKey: ["getAuctionsByCategory", { category }],
      queryFn: () => getAuctionsByCategory(token, category),
      placeholderData: keepPreviousData,
    });

  const useGetAuctionDetail = (id: number) =>
    useQuery({
      queryKey: ["getAuctionDetail"],
      queryFn: () => getAuctionDetail(token, id),
    });

  const useGetAuctionDropdownMutation = () =>
    useMutation({
      mutationFn: () => getAuctionDropdown(token),
      onMutate,
      onSuccess: (response) => {
        const communities = responseMapper<Community[]>(
          response.communities.data
        );
        const categories = responseMapper<Category[]>(response.categories.data);

        Object.assign(addAuctionForm, {
          inputs: addAuctionForm.inputs.map((input) => {
            if (input.name === "categoryId") {
              Object.assign(input, {
                items: categories.map((item) => ({
                  label: item.categoryName,
                  value: item.id,
                })),
              });
            } else if (input.name === "communityId") {
              Object.assign(input, {
                items: communities.map((item) => ({
                  label: item.communityName,
                  value: item.id,
                })),
              });
            }

            return input;
          }),
          onSubmit: (data: any) => addAuctionMutation.mutate(data),
        });

        nav.navigate("AuctionAdd");
      },
      onError,
      onSettled,
    });

  const addAuctionMutation = useMutation({
    mutationFn: (data: any) => addAuction(token, data),
    onMutate,
    onSuccess: (response) => {
      onSuccess(response.message);
      nav.navigate("MainApp", {
        screen: "Auction",
      });
      queryClient.invalidateQueries({ queryKey: ["getAuctionsByCommunity"] });
    },
    onError,
    onSettled,
  });

  const useBidAuctionMutation = () =>
    useMutation({
      mutationFn: (data: { id: number; data: BidAuction }) =>
        bidAuction(token, data.data, data.id),
      onMutate,
      onSuccess: (response) => {
        onSuccess(response.message);
        setBidModal(false);
        nav.navigate("MainApp", {
          screen: "Auction",
        });
      },
      onError,
      onSettled,
    });

  return {
    useGetUserAuctions,
    useGetAuctionsByCommunity,
    useGetAuctionsByCategory,
    useGetAuctionDetail,
    useGetAuctionDropdownMutation,
    useBidAuctionMutation,
  };
};

export default useAuctionModel;
