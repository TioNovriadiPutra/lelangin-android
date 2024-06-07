import { API_ENDPOINT } from "../utils/config/api";
import { axiosInstance } from "../utils/config/axios";

export const getUserProfile = async (token) => {
  try {
    const response = await axiosInstance.get(API_ENDPOINT.getUserProfile, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getUserProfilePic = async (token, url) => {
  try {
    const response = await axiosInstance.get(
      `${API_ENDPOINT.getUserProfilePic}/${url}`,
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

export const updateUserProfile = async (token, data) => {
  try {
    const reqBody = new FormData();
    reqBody.append("fullName", data.fullName);

    if (typeof data.profilePic === "object") {
      const fetchImage = await fetch(data.profilePic.uri);
      const blob = await fetchImage.blob();

      reqBody.append("profilePicChange", true);
      reqBody.append("profilePic", blob);
    } else {
      reqBody.append("profilePicChange", false);
    }

    const response = await axiosInstance.put(
      API_ENDPOINT.getUserProfile,
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

export const updateUserAddress = async (token, data) => {
  try {
    const response = await axiosInstance.put(
      API_ENDPOINT.updateUserAddress,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
