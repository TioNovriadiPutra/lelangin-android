import { API_ENDPOINT } from "@configs/api";
import { axiosInstance } from "@configs/axios";
import { moneyToNumberConverter, uriToBlob } from "@helpers/converter";
import {
  AddAuction,
  AuctionDetailDTO,
  AuctionDTO,
  BidAuction,
  ShippingAuction,
} from "@interfaces/data/auctionInterface";
import { CategoryDTO } from "@interfaces/data/categoryInterface";
import { CommunityDTO } from "@interfaces/data/communityInterface";
import { AxiosError } from "axios";

export const getUserAuctions = async (
  token: string
): Promise<ApiResponse<AuctionDTO[]>> => {
  try {
    const response = await axiosInstance.get(API_ENDPOINT.getAuctionsUser, {
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

export const getAuctionsByCommunity = async (
  token: string,
  id: number
): Promise<ApiResponse<AuctionDTO[]>> => {
  try {
    const response = await axiosInstance.get(
      API_ENDPOINT.getAuctionsByCommunity,
      {
        params: {
          community: id === 0 ? "" : id,
        },
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

export const getAuctionsByCategory = async (
  token: string,
  id: number
): Promise<ApiResponse<AuctionDTO[]>> => {
  try {
    const response = await axiosInstance.get(
      API_ENDPOINT.getAuctionsByCategory,
      {
        params: {
          category: id === 0 ? "" : id.toString(),
        },
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

export const getAuctionDetail = async (
  token: string,
  id: number
): Promise<ApiResponse<AuctionDetailDTO>> => {
  try {
    const response = await axiosInstance.get(
      `${API_ENDPOINT.getAuctionsUser}/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.log(error);
    const axiosError = error as AxiosError;

    throw axiosError.response.data;
  }
};

export const getAuctionDropdown = async (
  token: string
): Promise<{
  categories: ApiResponse<CategoryDTO[]>;
  communities: ApiResponse<CommunityDTO[]>;
}> => {
  try {
    const responseCom = await axiosInstance.get(API_ENDPOINT.getCommunities, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const responseCat = await axiosInstance.get(API_ENDPOINT.getCategories, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return {
      categories: responseCat.data,
      communities: responseCom.data,
    };
  } catch (error) {
    const axiosError = error as AxiosError;

    throw axiosError.response.data;
  }
};

export const getUserBids = async (
  token: string
): Promise<ApiResponse<AuctionDTO[]>> => {
  try {
    const response = await axiosInstance.get(API_ENDPOINT.bidAuction, {
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

export const getApproveAuctions = async (
  token: string
): Promise<ApiResponse<AuctionDTO[]>> => {
  try {
    const response = await axiosInstance.get(API_ENDPOINT.getApproveAuctions, {
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

export const addAuction = async (
  token: string,
  data: AddAuction
): Promise<ApiResponse> => {
  try {
    const formData = new FormData();

    if (data.auctionImages && data.auctionImages.length > 0) {
      for (let i = 0; i < data.auctionImages.length; i++) {
        const blob = await uriToBlob(data.auctionImages[i].uri);

        formData.append(`auctionImages.${i}`, blob);
      }
    }

    if (data.communityId)
      formData.append("communityId", data.communityId.value.toString());

    if (data.categoryId)
      formData.append("categoryId", data.categoryId.value.toString());

    if (data.buyNow === true) {
      if (data.buyNowPrice) {
        formData.append(
          "buyNowPrice",
          String(moneyToNumberConverter(data.buyNowPrice))
        );
      }
    }

    if (data.startBid)
      formData.append(
        "startBid",
        String(moneyToNumberConverter(data.startBid))
      );

    formData.append("auctionName", data.auctionName);
    formData.append("description", data.description);
    formData.append("buyNow", String(data.buyNow));
    formData.append("timer", data.timer);

    const response = await axiosInstance.post(
      API_ENDPOINT.addAuction,
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

export const bidAuction = async (
  token: string,
  data: BidAuction,
  id: number
) => {
  try {
    const reqBody = {
      nominal: data.nominal ? moneyToNumberConverter(data.nominal) : null,
    };

    const response = await axiosInstance.post(
      `${API_ENDPOINT.bidAuction}/${id}`,
      reqBody,
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

export const approveAuction = async (
  token: string,
  id: number
): Promise<ApiResponse> => {
  try {
    const response = await axiosInstance.get(
      `${API_ENDPOINT.bidAuction}/${id}`,
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

export const paymentAuction = async (
  token: string,
  id: number
): Promise<ApiResponse> => {
  try {
    const response = await axiosInstance.get(
      `${API_ENDPOINT.paymentAuction}/${id}`,
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

export const buyNowAuction = async (
  token: string,
  id: number
): Promise<ApiResponse> => {
  try {
    const response = await axiosInstance.get(
      `${API_ENDPOINT.buyNowAuction}/${id}`,
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

export const shippingAuction = async (
  token: string,
  id: number,
  data: ShippingAuction
): Promise<ApiResponse> => {
  try {
    const response = await axiosInstance.post(
      `${API_ENDPOINT.shippingAuction}/${id}`,
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
