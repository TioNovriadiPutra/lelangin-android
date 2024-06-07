import { useMutation } from "react-query";
import useControllerMutation from "../hooks/useControllerMutation";
import useUserModel from "../models/userModel";
import {
  accountEditAddressForm,
  accountEditForm,
} from "../utils/constant/form";
import { updateUserAddress, updateUserProfile } from "../services/userSevice";
import { useNavigation } from "@react-navigation/native";
import { queryClient } from "../utils/config/client";

const useUserController = () => {
  const nav = useNavigation();

  const { authToken, handleMutate, handleSuccess, handleError, handleSettled } =
    useControllerMutation();

  const { useGetUserProfile, useGetUserProfilePic } = useUserModel();

  const useGetUserProfileQuery = () => {
    const { data, isLoading, isError, error } = useGetUserProfile(authToken);

    const profileData = {
      id: null,
      profilePic: null,
      fullName: "",
      address: "",
    };

    if (!isLoading) {
      if (!isError) {
        Object.assign(profileData, {
          id: data.data.id,
          profilePic: data.data.profile_pic,
          fullName: data.data.full_name,
          address: data.data.address,
        });

        Object.assign(accountEditForm.defaultValues, {
          profilePic: data.data.profile_pic,
          fullName: data.data.full_name,
        });

        Object.assign(accountEditAddressForm.defaultValues, {
          address: data.data.address,
        });
      } else {
        handleError(error);
      }
    }

    return {
      profileData,
      isLoading,
    };
  };

  const useGetUserProfilePicQuery = (url) => {
    const { data, isLoading, isError, error } = useGetUserProfilePic(
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
      isLoading,
      uri,
    };
  };

  const updateUserProfileMutation = useMutation(
    (data) => updateUserProfile(authToken, data),
    {
      onMutate: () => {
        handleMutate();
      },
      onSuccess: (response) => {
        nav.navigate("AccountRoute", {
          screen: "Account",
        });
        queryClient.invalidateQueries("getUserProfile");
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

  const updateUserAddressMutation = useMutation(
    (data) => updateUserAddress(authToken, data),
    {
      onMutate: () => {
        handleMutate();
      },
      onSuccess: (response) => {
        nav.navigate("AccountRoute", {
          screen: "Account",
        });
        queryClient.invalidateQueries(["getUserProfile"]);
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
    useGetUserProfileQuery,
    useGetUserProfilePicQuery,
    updateUserProfile: (data) => updateUserProfileMutation.mutate(data),
    updateUserAddress: (data) => updateUserAddressMutation.mutate(data),
  };
};

export default useUserController;
