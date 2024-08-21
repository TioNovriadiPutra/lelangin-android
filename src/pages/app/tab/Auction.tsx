import React, { useEffect, useRef } from "react";
import MainContainer from "@containers/MainContainer";
import useAuctionController from "@controllers/auctionController";
import { AuctionListSkeleton } from "@components/skeleton";
import { AuctionList } from "@components/organism";
import { AppHeader } from "@components/molecule";
import { FlatList, StyleSheet, View } from "react-native";
import { useRecoilValue } from "recoil";
import { currentSwitchState } from "@store/pageState";

const Auction = () => {
  const currentSwitch = useRecoilValue(currentSwitchState);

  const listRef = useRef(null);

  const { useGetUserAuctionsService, useGetUserBidsService } =
    useAuctionController();

  const auctions = useGetUserAuctionsService();
  const bids = useGetUserBidsService();

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollToIndex({ animated: true, index: currentSwitch });
    }
  }, [currentSwitch]);

  return (
    <MainContainer>
      <AppHeader type="switch" withBack={false} />

      {auctions.isLoading || bids.isLoading ? (
        <AuctionListSkeleton />
      ) : (
        <View style={styles.container}>
          <FlatList
            ref={listRef}
            data={[bids.finalData, auctions.finalData]}
            horizontal
            scrollEnabled={false}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => <AuctionList listData={item} />}
          />
        </View>
      )}
    </MainContainer>
  );
};

export default Auction;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
