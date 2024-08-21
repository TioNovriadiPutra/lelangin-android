import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { fonts } from "@themes/fonts";
import { colors } from "@themes/colors";
import { Pricing } from "@components/atom";
import { monyConverter } from "@helpers/converter";

type Props = {
  highestBid: number;
};

const Summary = ({ highestBid }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Summary</Text>

      <Pricing highestBid={highestBid} />

      <View style={styles.desc}>
        <Text style={styles.label}>Total</Text>

        <Text style={styles.value}>
          {monyConverter(parseInt(highestBid) + 1000)}
        </Text>
      </View>
    </View>
  );
};

export default Summary;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 14,
    paddingLeft: 16,
    paddingRight: 18,
    borderWidth: 1.5,
    borderColor: "#D6D6D6",
    borderRadius: 14,
    margin: 14,
    gap: 14,
  },
  title: {
    fontFamily: fonts.SemiBold,
    fontSize: 16,
    color: colors.Black,
  },
  desc: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  label: {
    fontFamily: fonts.Medium,
    fontSize: 16,
    color: colors.Black,
  },
  value: {
    fontFamily: fonts.Regular,
    fontSize: 16,
    color: colors.Black,
  },
});
