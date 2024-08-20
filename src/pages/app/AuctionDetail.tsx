import { ScrollView } from "react-native";
import React from "react";
import MainContainer from "@containers/MainContainer";
import useAuctionController from "@controllers/auctionController";
import { DetailContent, DetailHeader } from "@components/organism";
import { DetailSkeleton } from "@components/skeleton";
import { DetailFooter } from "@components/molecule";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { userIdState } from "@store/authState";
import { bidModalSelector } from "@store/pageState";

const AuctionDetail = ({ route }) => {
  const { id } = route.params;

  const userId = useRecoilValue(userIdState);
  const setBidModal = useSetRecoilState(bidModalSelector);

  const { useGetAuctionDetailService, bidAuctionService } =
    useAuctionController();

  const { finalData, isLoading } = useGetAuctionDetailService(id);

  return (
    <MainContainer>
      {isLoading ? (
        <DetailSkeleton />
      ) : (
        <ScrollView>
          <DetailHeader
            galleriesData={finalData.galleries}
            timer={finalData.timer}
          />

          <DetailContent detailData={finalData} />

          <DetailFooter
            buyNowPrice={finalData.buyNowPrice}
            mine={userId === finalData.profileId}
            onBid={() => {
              setBidModal({
                show: true,
                data: {
                  highestBid: finalData.highestBid,
                  onBid: (data: any) =>
                    bidAuctionService({ id: finalData.id, data }),
                },
              });
            }}
          />
        </ScrollView>
      )}
    </MainContainer>
  );
};

export default AuctionDetail;
