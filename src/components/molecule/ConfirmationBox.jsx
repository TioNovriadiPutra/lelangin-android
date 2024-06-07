import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../../themes/colors";
import ConfirmationHeader from "../atom/ConfirmationHeader";
import { fonts } from "../../themes/fonts";
import ConfirmationFooter from "../atom/ConfirmationFooter";

const ConfirmationBox = ({ confirmationData, onClose }) => {
  return (
    <View style={styles.container}>
      <ConfirmationHeader title={confirmationData.title} onClose={onClose} />

      <Text style={styles.description}>{confirmationData.description}</Text>

      <ConfirmationFooter
        confirmLabel={confirmationData.confirmLabel}
        onConfirm={() => {
          confirmationData.onConfirm();
          onClose();
        }}
        onClose={onClose}
      />
    </View>
  );
};

export default ConfirmationBox;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.White,
    width: 296,
    height: 370,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 33,
    borderRadius: 14,
    justifyContent: "space-between",
  },
  description: {
    fontFamily: fonts.Regular,
    fontSize: 16,
    color: colors.Desc,
    textAlign: "center",
  },
});
