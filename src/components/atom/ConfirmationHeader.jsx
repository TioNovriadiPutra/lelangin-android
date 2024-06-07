import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LelanginBackButton from "./LelanginBackButton";
import { fonts } from "../../themes/fonts";
import { colors } from "../../themes/colors";

const ConfirmationHeader = ({ title, onClose }) => {
  return (
    <View style={styles.container}>
      <LelanginBackButton onBack={onClose} />

      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default ConfirmationHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontFamily: fonts.SemiBold,
    fontSize: 16,
    color: colors.Black,
    flex: 1,
    textAlign: "center",
    zIndex: 1,
  },
});
