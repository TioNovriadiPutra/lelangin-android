import { useMutation } from "react-query";
import { addCommunity } from "../services/communityService";
import useControllerMutation from "../hooks/useControllerMutation";
import { useNavigation } from "@react-navigation/native";
import useCommunityModel from "../models/communityModel";
import { queryClient } from "../utils/config/client";

const useCommunityController = () => {
  const nav = useNavigation();

  const { useGetCommunities, useGetCommunityPic } = useCommunityModel();

  const { authToken, handleMutate, handleError, handleSuccess, handleSettled } =
    useControllerMutation();

  const useGetCommunitiesQuery = () => {
    const { data, isLoading, isError, error } = useGetCommunities(authToken);

    let communityData = [];

    if (!isLoading) {
      if (!isError) {
        communityData = data.data;
      } else {
        console.log(error);
        handleError(error);
      }
    }

    return {
      communityData,
      isLoading,
    };
  };

  const useGetCommunityPicQuery = (url) => {
    const { data, isLoading, isError, error } = useGetCommunityPic(
      authToken,
      url
    );

    let uri = "";

    if (!isLoading) {
      if (!isError) {
        uri = data;
      } else {
        handleError(error);
      }
    }

    return {
      uri,
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
    useGetCommunityPicQuery,
    addCommunity: (data) => addCommunityMutation.mutate(data),
  };
};

export default useCommunityController;
