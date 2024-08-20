import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { fonts } from "@themes/fonts";
import { colors } from "@themes/colors";
import { monyConverter } from "@helpers/converter";

type Props = {
  highestBid: number;
};

const CurrentBid = ({ highestBid }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Current Bid</Text>

      <Text style={styles.nominal}>{monyConverter(highestBid)}</Text>
    </View>
  );
};

export default CurrentBid;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 48,
    marginBottom: 37,
    gap: 5,
  },
  title: {
    fontFamily: fonts.Regular,
    fontSize: 14,
    color: colors.Success,
    textAlign: "center",
  },
  nominal: {
    fontFamily: fonts.Medium,
    fontSize: 16,
    color: colors.Black,
    textAlign: "center",
  },
});
