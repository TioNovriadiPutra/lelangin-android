import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import { Auction } from "@interfaces/data/auctionInterface";
import { AuctionItem } from "@components/molecule";

type Props = {
  listData: Auction[];
};

const AuctionList = ({ listData }: Props) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.list}>
        {listData.map((item, index) => (
          <AuctionItem key={index.toString()} itemData={item} />
        ))}
      </ScrollView>
    </View>
  );
};

export default AuctionList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 14,
  },
  list: {
    gap: 14,
  },
});
