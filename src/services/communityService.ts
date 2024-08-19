import { API_ENDPOINT } from "@configs/api";
import { axiosInstance } from "@configs/axios";
import { uriToBlob } from "@helpers/converter";
import {
  AddCommunity,
  CommunityDTO,
} from "@interfaces/data/communityInterface";
import { AxiosError } from "axios";

export const getCommunities = async (
  token: string
): Promise<ApiResponse<CommunityDTO>> => {
  try {
    const response = await axiosInstance.get(API_ENDPOINT.getCommunities, {
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

export const addCommunity = async (
  token: string,
  data: AddCommunity
): Promise<ApiResponse> => {
  try {
    const formData = new FormData();

    if (data.thumbnail) {
      const blob = await uriToBlob(data.thumbnail.uri, data.thumbnail.type);

      formData.append("thumbnail", blob);
    }

    formData.append("communityName", data.communityName);

    const response = await axiosInstance.post(
      API_ENDPOINT.getCommunities,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
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
