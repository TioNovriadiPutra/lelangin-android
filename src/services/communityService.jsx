import { API_ENDPOINT } from "../utils/config/api";
import { axiosInstance } from "../utils/config/axios";
import { getImageBlob } from "../utils/helper/getImageBlob";

export const getCommunities = async (token) => {
  try {
    const response = await axiosInstance.get(API_ENDPOINT.addCommunity, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getCommunityPic = async (token, url) => {
  try {
    const response = await axiosInstance.get(
      `${API_ENDPOINT.getCommunityPic}/${url}`,
      {
        responseType: "blob",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const uri = URL.createObjectURL(response.data);

    return uri;
  } catch (error) {
    throw error.response.data;
  }
};

export const addCommunity = async (token, data) => {
  try {
    const reqBody = new FormData();
    reqBody.append("communityName", data.communityName);
    if (data.communityImage) {
      const blob = await getImageBlob(data.communityImage.uri);

      reqBody.append("communityImage", blob);
    }

    const response = await axiosInstance.post(
      API_ENDPOINT.addCommunity,
      reqBody,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
