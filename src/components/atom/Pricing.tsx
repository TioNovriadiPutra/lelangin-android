import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { monyConverter } from "@helpers/converter";
import { fonts } from "@themes/fonts";
import { colors } from "@themes/colors";

type Props = {
  highestBid: number;
};

const Pricing = ({ highestBid }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.desc}>
        <Text style={styles.label}>Price</Text>

        <Text style={styles.value}>{monyConverter(highestBid)}</Text>
      </View>

      <View style={styles.desc}>
        <Text style={styles.label}>Admin Fee</Text>

        <Text style={styles.value}>{monyConverter(1000)}</Text>
      </View>
    </View>
  );
};

export default Pricing;

const styles = StyleSheet.create({
  container: {
    gap: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#D6D6D6",
    borderStyle: "dashed",
    paddingBottom: 15,
  },
  desc: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  label: {
    fontFamily: fonts.Regular,
    fontSize: 14,
    color: "#B0B0B0",
  },
  value: {
    fontFamily: fonts.Regular,
    fontSize: 14,
    color: colors.Black,
  },
});
