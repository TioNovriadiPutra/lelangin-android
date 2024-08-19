import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { Auction } from "@interfaces/data/auctionInterface";
import { API_ENDPOINT } from "@configs/api";
import { colors } from "@themes/colors";
import { AuctionItemDesc } from "@components/atom";

type Props = {
  itemData: Auction;
};

const AuctionItem = ({ itemData }: Props) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: `${process.env.EXPO_PUBLIC_API_URL}${API_ENDPOINT.getAuctionImage}/${itemData.galleries[0]}`,
        }}
        style={styles.image}
      />

      <AuctionItemDesc itemData={itemData} />
    </View>
  );
};

export default AuctionItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  image: {
    width: 138,
    height: 138,
    resizeMode: "contain",
    borderRadius: 14,
    backgroundColor: colors.Placeholder,
  },
});
