import React from "react";
import MainContainer from "@containers/MainContainer";
import { AppHeader, CircleList } from "@components/molecule";
import useCommunityController from "@controllers/communityController";
import { AuctionListSkeleton, CircleListSkeleton } from "@components/skeleton";
import useAuctionController from "@controllers/auctionController";
import { AuctionList } from "@components/organism";

const Community = () => {
  const { useGetCommunitiesService } = useCommunityController();
  const { useGetAuctionsByCommunityService } = useAuctionController();

  const communities = useGetCommunitiesService();
  const auctions = useGetAuctionsByCommunityService();

  return (
    <MainContainer>
      <AppHeader
        title="Community"
        withBack={false}
        buttonData={{
          type: "search",
        }}
      />

      {communities.isLoading ? (
        <CircleListSkeleton />
      ) : (
        <CircleList listData={communities.finalData} />
      )}

      {auctions.isLoading ? (
        <AuctionListSkeleton />
      ) : (
        <AuctionList listData={auctions.finalData} />
      )}
    </MainContainer>
  );
};

export default Community;
