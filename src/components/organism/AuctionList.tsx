import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import { Auction } from "@interfaces/data/auctionInterface";
import { AuctionItem } from "@components/molecule";

type Props = {
  listData: Auction[];
  type?: "normal" | "order";
};

const AuctionList = ({ listData, type = "normal" }: Props) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.list}>
        {listData.map((item, index) => (
          <AuctionItem key={index.toString()} itemData={item} type={type} />
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
    width: Dimensions.get("window").width,
  },
  list: {
    gap: 14,
  },
});
