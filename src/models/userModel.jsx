import { useQuery } from "react-query";
import { getUserProfile, getUserProfilePic } from "../services/userSevice";

const useUserModel = () => {
  const useGetUserProfile = (token) => {
    return useQuery({
      queryKey: ["getUserProfile"],
      queryFn: () => getUserProfile(token),
    });
  };

  const useGetUserProfilePic = (token, url) => {
    return useQuery({
      queryKey: ["getUserProfilePic"],
      queryFn: () => getUserProfilePic(token, url),
    });
  };

  return {
    useGetUserProfile,
    useGetUserProfilePic,
  };
};

export default useUserModel;
