import { StyleSheet, View } from "react-native";
import React from "react";
import { AuctionDetail } from "@interfaces/data/auctionInterface";
import {
  DetailBox,
  DetailDescription,
  DetailTitle,
} from "@components/molecule";

type Props = {
  detailData: AuctionDetail;
};

const DetailContent = ({ detailData }: Props) => {
  return (
    <View style={styles.container}>
      <DetailTitle
        auctionName={detailData.auctionName}
        categoryName={detailData.categoryName}
      />

      <DetailBox
        buyNowPrice={detailData.buyNowPrice}
        highestBid={detailData.highestBid}
      />

      <DetailDescription description={detailData.description} />
    </View>
  );
};

export default DetailContent;

const styles = StyleSheet.create({
  container: {
    padding: 14,
    gap: 14,
  },
});
