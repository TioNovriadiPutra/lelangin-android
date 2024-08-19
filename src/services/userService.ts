import { API_ENDPOINT } from "@configs/api";
import { axiosInstance } from "@configs/axios";
import { uriToBlob } from "@helpers/converter";
import {
  UpdateUser,
  UpdateUserAddress,
  UserDTO,
} from "@interfaces/data/userInterface";
import { AxiosError } from "axios";

export const getUserProfile = async (
  token: string
): Promise<ApiResponse<UserDTO>> => {
  try {
    const response = await axiosInstance.get(API_ENDPOINT.getUserProfile, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;

    throw axiosError.response.data;
  }
};

export const updateUserProfile = async (
  token: string,
  data: UpdateUser
): Promise<ApiResponse> => {
  try {
    const formData = new FormData();

    if (data.profilePic) {
      if (typeof data.profilePic === "object") {
        const blob = await uriToBlob(data.profilePic.uri);

        formData.append("profilePic", blob);
      }
    }

    formData.append("fullName", data.fullName);

    const response = await axiosInstance.put(
      API_ENDPOINT.updateUserProfile,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;

    throw axiosError.response.data;
  }
};

export const updateUserAddress = async (
  token: string,
  data: UpdateUserAddress
): Promise<ApiResponse> => {
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
    const axiosError = error as AxiosError;

    throw axiosError.response.data;
  }
};
