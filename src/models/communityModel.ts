import { queryClient } from "@configs/client";
import { AppStackProps } from "@interfaces/navigationType";
import { useNavigation } from "@react-navigation/native";
import { addCommunity, getCommunities } from "@services/communityService";
import { useMutation, useQuery } from "@tanstack/react-query";

const useCommunityModel = (
  token: string,
  onMutate: () => void,
  onSuccess: (message: string) => void,
  onError: (error: ApiErrorResponse) => void,
  onSettled: () => void
) => {
  const nav = useNavigation<AppStackProps>();

  const useGetCommunities = () =>
    useQuery({
      queryKey: ["getCommunities"],
      queryFn: () => getCommunities(token),
    });

  const useAddCommunityMutation = () =>
    useMutation({
      mutationFn: (data: any) => addCommunity(token, data),
      onMutate,
      onSuccess: (response) => {
        onSuccess(response.message);
        nav.navigate("MainApp", {
          screen: "Community",
        });
        queryClient.invalidateQueries({ queryKey: ["getCommunities"] });
      },
      onError,
      onSettled,
    });

  return {
    useGetCommunities,
    useAddCommunityMutation,
  };
};

export default useCommunityModel;
