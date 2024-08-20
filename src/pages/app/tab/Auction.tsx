import React from "react";
import MainContainer from "@containers/MainContainer";
import useAuctionController from "@controllers/auctionController";
import { AuctionListSkeleton } from "@components/skeleton";
import { AuctionList } from "@components/organism";

const Auction = () => {
  const { useGetUserAuctionsService } = useAuctionController();

  const { finalData, isLoading } = useGetUserAuctionsService();

  return (
    <MainContainer>
      {isLoading ? (
        <AuctionListSkeleton />
      ) : (
        <AuctionList listData={finalData} />
      )}
    </MainContainer>
  );
};

export default Auction;
