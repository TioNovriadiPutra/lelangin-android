import dayjs from "dayjs";
import { API_ENDPOINT } from "../utils/config/api";
import { axiosInstance } from "../utils/config/axios";

export const login = async (data) => {
  try {
    const response = await axiosInstance.post(API_ENDPOINT.login, data);

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const register = async (data) => {
  try {
    const reqBody = {
      ...data,
      gender: data.gender ? data.gender.value : null,
      dob: data.dob ? dayjs(data.dob).format("DD-MM-YYYY") : null,
    };

    const response = await axiosInstance.post(API_ENDPOINT.register, reqBody);

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const logout = async (token) => {
  try {
    const response = await axiosInstance.get(API_ENDPOINT.logout, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
