import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "@themes/colors";
import { monyConverter } from "@helpers/converter";
import { fonts } from "@themes/fonts";

type Props = {
  buyNowPrice: number | null;
  highestBid: number;
};

const DetailBox = ({ buyNowPrice, highestBid }: Props) => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, { borderRightWidth: 1 }]}>
        <Text style={[styles.label, { color: colors.Accent }]}>Buy Now</Text>

        <Text style={styles.price}>
          {buyNowPrice ? monyConverter(buyNowPrice) : "-"}
        </Text>
      </View>

      <View style={[styles.box, { borderLeftWidth: 1 }]}>
        <Text style={[styles.label, { color: colors.Success }]}>
          Highest Bid
        </Text>

        <Text style={styles.price}>{monyConverter(highestBid)}</Text>
      </View>
    </View>
  );
};

export default DetailBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingTop: 4,
    paddingBottom: 11,
    borderBottomWidth: 1,
    borderColor: colors.LightGrey,
  },
  box: {
    flex: 1,
    alignItems: "center",
    gap: 5,
    borderColor: colors.LightGrey,
  },
  price: {
    fontFamily: fonts.Medium,
    fontSize: 16,
    color: colors.Black,
  },
  label: {
    fontFamily: fonts.Regular,
    fontSize: 14,
  },
});
