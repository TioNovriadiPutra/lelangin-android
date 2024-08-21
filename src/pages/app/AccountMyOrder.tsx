import { StyleSheet } from "react-native";
import React from "react";
import MainContainer from "@containers/MainContainer";
import { AppHeader } from "@components/molecule";
import useAuctionController from "@controllers/auctionController";
import { AuctionListSkeleton } from "@components/skeleton";
import { AuctionList } from "@components/organism";

const AccountMyOrder = () => {
  const { useGetApproveAuctionsService } = useAuctionController();

  const { finalData, isLoading } = useGetApproveAuctionsService();

  return (
    <MainContainer>
      <AppHeader
        withBack
        title="My Orders"
        buttonData={{
          type: "search",
        }}
      />

      {isLoading ? (
        <AuctionListSkeleton />
      ) : (
        <AuctionList listData={finalData} type="order" />
      )}
    </MainContainer>
  );
};

export default AccountMyOrder;

const styles = StyleSheet.create({});
