import { useMutation } from "react-query";
import { addCommunity } from "../services/communityService";
import useControllerMutation from "../hooks/useControllerMutation";
import { useNavigation } from "@react-navigation/native";
import useCommunityModel from "../models/communityModel";
import { queryClient } from "../utils/config/client";
import { useSetRecoilState } from "recoil";
import { currentCommunityState } from "../store/pageState";

const useCommunityController = () => {
  const setCurrentCommunity = useSetRecoilState(currentCommunityState);

  const nav = useNavigation();

  const { useGetCommunities } = useCommunityModel();

  const { authToken, handleMutate, handleError, handleSuccess, handleSettled } =
    useControllerMutation();

  const useGetCommunitiesQuery = () => {
    const { data, isLoading, isError, error } = useGetCommunities(authToken);

    let communityData = [];

    if (!isLoading) {
      if (!isError) {
        communityData = data.data;

        if (data.data.length > 0) {
          setCurrentCommunity(data.data[0].id);
        }
      } else {
        handleError(error);
      }
    }

    return {
      communityData,
      isLoading,
    };
  };

  const addCommunityMutation = useMutation(
    (data) => addCommunity(authToken, data),
    {
      onMutate: () => {
        handleMutate();
      },
      onSuccess: (response) => {
        queryClient.invalidateQueries(["getCommunities"]);
        nav.navigate("AppTabRoute", {
          screen: "Community",
        });
        handleSuccess(response.message);
      },
      onError: (error) => {
        handleError(error);
      },
      onSettled: () => {
        handleSettled();
      },
    }
  );

  return {
    useGetCommunitiesQuery,
    addCommunity: (data) => addCommunityMutation.mutate(data),
  };
};

export default useCommunityController;
