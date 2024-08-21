import { ScrollView } from "react-native";
import React from "react";
import MainContainer from "@containers/MainContainer";
import useAuctionController from "@controllers/auctionController";
import { DetailContent, DetailHeader } from "@components/organism";
import { DetailSkeleton } from "@components/skeleton";
import { DetailFooter } from "@components/molecule";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { userIdState } from "@store/authState";
import { approveModalSelector, bidModalSelector } from "@store/pageState";
import { useNavigation } from "@react-navigation/native";
import { AppStackProps } from "@interfaces/navigationType";

const AuctionDetail = ({ route }) => {
  const { id } = route.params;

  const userId = useRecoilValue(userIdState);
  const setBidModal = useSetRecoilState(bidModalSelector);
  const setApproveModal = useSetRecoilState(approveModalSelector);

  const nav = useNavigation<AppStackProps>();

  const {
    useGetAuctionDetailService,
    bidAuctionService,
    approveAuctionService,
  } = useAuctionController();

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

          {!finalData.approve ? (
            <DetailFooter
              type={
                userId === finalData.profileId
                  ? "mine"
                  : finalData.buyNowPrice
                  ? "buyNow"
                  : "bid"
              }
              onBid={() => {
                if (userId === finalData.profileId) {
                  setApproveModal({
                    show: true,
                    data: {
                      onApprove: () => approveAuctionService(finalData.id),
                    },
                  });
                } else {
                  setBidModal({
                    show: true,
                    data: {
                      highestBid: finalData.highestBid,
                      onBid: (data: any) =>
                        bidAuctionService({ id: finalData.id, data }),
                    },
                  });
                }
              }}
            />
          ) : (
            <DetailFooter
              type="payment"
              onBid={() =>
                nav.navigate("AuctionPayment", {
                  id,
                  auctionName: finalData.auctionName,
                  highestBid: finalData.highestBid,
                  status: finalData.status,
                  galleries: finalData.galleries,
                })
              }
            />
          )}
        </ScrollView>
      )}
    </MainContainer>
  );
};

export default AuctionDetail;
