import { editAccountForm, editAddressForm } from "@constants/form";
import { responseMapper } from "@helpers/mapper";
import useHelper from "@hooks/useHelper";
import { User } from "@interfaces/data/userInterface";
import useUserModel from "@models/userModel";

const useUserController = () => {
  const { auth, onMutate, onError, onSuccess, onSettled } = useHelper();

  const {
    useGetUserProfile,
    useUpdateUserProfileMutation,
    useUpdateUserAddressMutation,
  } = useUserModel(auth.token, onMutate, onSuccess, onError, onSettled);

  const updateUserProfileMutation = useUpdateUserProfileMutation();

  const updateUserAddressMutation = useUpdateUserAddressMutation();

  const useGetUserProfileService = (): {
    finalData: User;
    isLoading: boolean;
  } => {
    const { data, isLoading, isError, error } = useGetUserProfile();

    let finalData: User = {
      id: 0,
      profilePic: null,
      fullName: "",
      address: "",
    };

    if (isError) {
      onError(error);
    } else {
      if (data) {
        const convertData = responseMapper<User>(data.data);

        Object.assign(editAccountForm, {
          defaultValue: {
            profilePic: convertData.profilePic,
            fullName: convertData.fullName,
          },
          onSubmit: (data: any) => updateUserProfileMutation.mutate(data),
        });

        Object.assign(editAddressForm, {
          defaultValue: {
            address: convertData.address,
          },
          onSubmit: (data: any) => updateUserAddressMutation.mutate(data),
        });

        finalData = convertData;
      }
    }

    return {
      isLoading,
      finalData,
    };
  };

  return {
    useGetUserProfileService,
  };
};

export default useUserController;
