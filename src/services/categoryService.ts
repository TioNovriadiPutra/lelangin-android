import { API_ENDPOINT } from "@configs/api";
import { axiosInstance } from "@configs/axios";
import { CategoryDTO } from "@interfaces/data/categoryInterface";
import { AxiosError } from "axios";

export const getCategories = async (
  token: string
): Promise<ApiResponse<CategoryDTO>> => {
  try {
    const response = await axiosInstance.get(API_ENDPOINT.getCategories, {
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
