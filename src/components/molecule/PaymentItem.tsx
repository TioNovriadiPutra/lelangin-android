import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { monyConverter } from "@helpers/converter";
import { fonts } from "@themes/fonts";
import { colors } from "@themes/colors";
import { API_ENDPOINT } from "@configs/api";

type Props = {
  auctionName: string;
  highestBid: number;
  galleries: string[];
};

const PaymentItem = ({ auctionName, highestBid, galleries }: Props) => {
  const galleriesString = JSON.stringify(galleries);

  const galleriesClean = galleriesString.replace('"', "");

  const galleriesArr = galleriesClean.split(",");

  for (const image of galleriesArr) {
    image.replace("[", "");
    image.replace('"', "");
    image.replace("]", "");
  }

  return (
    <View style={styles.container}>
      <View style={styles.desc}>
        <Text style={styles.name}>{auctionName}</Text>
        <Text style={styles.label}>Final Bid</Text>
        <Text style={styles.value}>{monyConverter(highestBid)}</Text>
      </View>

      <Image
        source={{
          uri: `${process.env.EXPO_PUBLIC_API_URL}${API_ENDPOINT.getAuctionImage}/${galleriesArr[0]}`,
        }}
        style={styles.image}
      />
    </View>
  );
};

export default PaymentItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 14,
    marginTop: 21,
    borderBottomWidth: 1,
    borderBottomColor: colors.LightGrey,
    paddingBottom: 14,
  },
  desc: {
    flex: 1,
    gap: 4,
  },
  name: {
    fontFamily: fonts.Medium,
    fontSize: 16,
    color: colors.Black,
  },
  label: {
    fontFamily: fonts.Regular,
    fontSize: 14,
    color: colors.Label,
  },
  value: {
    fontFamily: fonts.Regular,
    fontSize: 14,
    color: colors.Black,
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 8,
    backgroundColor: colors.Placeholder,
  },
});
