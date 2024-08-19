import { API_ENDPOINT } from "@configs/api";
import { axiosInstance } from "@configs/axios";
import { Login, LoginData, Register } from "@interfaces/data/authInterface";
import { AxiosError } from "axios";

export const login = async (data: Login): Promise<ApiResponse<LoginData>> => {
  try {
    const response = await axiosInstance.post(API_ENDPOINT.login, data);

    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;

    throw axiosError.response.data;
  }
};

export const register = async (data: Register): Promise<ApiResponse> => {
  try {
    const reqBody = {
      ...data,
      gender: data.gender ? data.gender.value : null,
    };

    const response = await axiosInstance.post(API_ENDPOINT.register, reqBody);

    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;

    throw axiosError.response.data;
  }
};

export const logout = async (token: string): Promise<ApiResponse> => {
  try {
    const response = await axiosInstance.get(API_ENDPOINT.logout, {
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
