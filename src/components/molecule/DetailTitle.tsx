import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { fonts } from "@themes/fonts";
import { colors } from "@themes/colors";

type Props = {
  auctionName: string;
  categoryName: string;
};

const DetailTitle = ({ auctionName, categoryName }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{auctionName}</Text>

      <Text style={styles.category}>{categoryName}</Text>
    </View>
  );
};

export default DetailTitle;

const styles = StyleSheet.create({
  container: {
    gap: 4,
  },
  title: {
    fontFamily: fonts.SemiBold,
    fontSize: 18,
    color: colors.Black,
  },
  category: {
    fontFamily: fonts.Regular,
    fontSize: 14,
    color: colors.Inactive,
  },
});
