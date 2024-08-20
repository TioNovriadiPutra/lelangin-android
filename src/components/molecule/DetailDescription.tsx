import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { fonts } from "@themes/fonts";
import { colors } from "@themes/colors";

type Props = {
  description: string;
};

const DetailDescription = ({ description }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Description</Text>

      <Text style={styles.desc}>{description}</Text>
    </View>
  );
};

export default DetailDescription;

const styles = StyleSheet.create({
  container: {
    gap: 14,
  },
  title: {
    fontFamily: fonts.SemiBold,
    fontSize: 14,
    color: colors.Inactive,
  },
  desc: {
    fontFamily: fonts.Regular,
    fontSize: 14,
    color: colors.Black,
  },
});
