import { API_ENDPOINT } from "../utils/config/api";
import { axiosInstance } from "../utils/config/axios";

export const getAuctionsByCommunity = async (token, id) => {
  try {
    const response = await axiosInstance.get(
      `${API_ENDPOINT.getAuctions}/${id}`,
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
