import { addCommunityForm } from "@constants/form";
import { responseMapper } from "@helpers/mapper";
import useHelper from "@hooks/useHelper";
import { Community } from "@interfaces/data/communityInterface";
import useCommunityModel from "@models/communityModel";

const useCommunityController = () => {
  const { auth, onMutate, onSuccess, onError, onSettled } = useHelper();

  const { useGetCommunities, useAddCommunityMutation } = useCommunityModel(
    auth.token,
    onMutate,
    onSuccess,
    onError,
    onSettled
  );

  const addCommunityMutation = useAddCommunityMutation();

  const useGetCommunitiesService = () => {
    const { data, isLoading, isError, error } = useGetCommunities();

    let finalData: Community[] = [];

    if (isError) {
      onError(error);
    } else {
      if (data) {
        const convertData = responseMapper<Community[]>(data.data);

        Object.assign(addCommunityForm, {
          onSubmit: (data: any) => addCommunityMutation.mutate(data),
        });

        finalData = convertData;
      }
    }

    return {
      finalData,
      isLoading,
    };
  };

  return {
    useGetCommunitiesService,
  };
};

export default useCommunityController;
