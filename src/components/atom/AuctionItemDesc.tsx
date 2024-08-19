import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Auction } from "@interfaces/data/auctionInterface";
import { fonts } from "@themes/fonts";
import { colors } from "@themes/colors";
import useAuctionItemDesc from "@hooks/useAuctionItemDesc";
import { monyConverter } from "@helpers/converter";

type Props = {
  itemData: Auction;
};

const AuctionItemDesc = ({ itemData }: Props) => {
  const { time, done } = useAuctionItemDesc(itemData.timer);

  return (
    <View style={styles.container}>
      <View style={styles.descContainer}>
        <Text
          style={[
            styles.desc,
            { color: done ? colors.Danger : colors.Success },
          ]}
        >
          {done ? "Ended" : time}
        </Text>

        <Text style={[styles.desc, styles.title]}>{itemData.auctionName}</Text>
      </View>

      <View style={styles.descContainer}>
        <Text style={styles.label}>Highest Bid</Text>

        <Text style={[styles.desc, styles.title]}>
          {monyConverter(itemData.highestBid)}
        </Text>
      </View>
    </View>
  );
};

export default AuctionItemDesc;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 12,
  },
  descContainer: {
    gap: 4,
  },
  desc: {
    fontFamily: fonts.Medium,
    fontSize: 14,
  },
  title: {
    color: colors.Title,
  },
  label: {
    fontFamily: fonts.Regular,
    fontSize: 14,
    color: colors.Inactive,
  },
});