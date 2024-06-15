import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import AuctionListCard from "../atom/AuctionListCard";
import useAuctionController from "../../controllers/auctionController";
import AuctionListSkeleton from "../skeleton/AuctionListSkeleton";

const AuctionList = () => {
  const { useGetAuctionsByCommunityQuery } = useAuctionController();

  const { auctionData, isLoading } = useGetAuctionsByCommunityQuery();

  if (isLoading) return <AuctionListSkeleton />;

  return (
    <View style={styles.container}>
      <FlatList
        data={auctionData}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => <AuctionListCard cardData={item} />}
      />
    </View>
  );
};

export default AuctionList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    gap: 14,
    paddingHorizontal: 14,
    paddingBottom: 74,
  },
});
