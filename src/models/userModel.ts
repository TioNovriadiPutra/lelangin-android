import { queryClient } from "@configs/client";
import { UserDTO } from "@interfaces/data/userInterface";
import { AppStackProps } from "@interfaces/navigationType";
import { useNavigation } from "@react-navigation/native";
import {
  getUserProfile,
  updateUserAddress,
  updateUserProfile,
} from "@services/userService";
import { useMutation, useQuery } from "@tanstack/react-query";

const useUserModel = (
  token: string,
  onMutate: () => void,
  onSuccess: (message: string) => void,
  onError: (error: ApiErrorResponse) => void,
  onSettled: () => void
) => {
  const nav = useNavigation<AppStackProps>();

  const useGetUserProfile = () =>
    useQuery<ApiResponse<UserDTO>>({
      queryKey: ["getUserProfile"],
      queryFn: () => getUserProfile(token),
    });

  const useUpdateUserProfileMutation = () =>
    useMutation({
      mutationFn: (data: any) => updateUserProfile(token, data),
      onMutate,
      onSuccess: (response) => {
        onSuccess(response.message);
        nav.navigate("MainApp", {
          screen: "Account",
        });
        queryClient.invalidateQueries({ queryKey: ["getUserProfile"] });
      },
      onError,
      onSettled,
    });

  const useUpdateUserAddressMutation = () =>
    useMutation({
      mutationFn: (data: any) => updateUserAddress(token, data),
      onMutate,
      onSuccess: (response) => {
        onSuccess(response.message);
        nav.navigate("MainApp", {
          screen: "Account",
        });
        queryClient.invalidateQueries({ queryKey: ["getUserProfile"] });
      },
      onError,
      onSettled,
    });

  return {
    useGetUserProfile,
    useUpdateUserProfileMutation,
    useUpdateUserAddressMutation,
  };
};

export default useUserModel;
