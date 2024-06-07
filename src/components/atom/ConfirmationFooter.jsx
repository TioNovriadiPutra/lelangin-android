import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import LelanginSubmitButton from "./LelanginSubmitButton";
import { colors } from "../../themes/colors";
import { fonts } from "../../themes/fonts";

const ConfirmationFooter = ({ confirmLabel, onConfirm, onClose }) => {
  return (
    <View style={styles.container}>
      <LelanginSubmitButton
        label={confirmLabel}
        color={colors.Main}
        buttonStyles={styles.button}
        onPress={onConfirm}
      />

      <Pressable onPress={onClose}>
        <Text style={styles.label}>No, cancel this action</Text>
      </Pressable>
    </View>
  );
};

export default ConfirmationFooter;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 24,
  },
  button: {
    width: 184,
  },
  label: {
    fontFamily: fonts.Medium,
    fontSize: 16,
    color: colors.Confirm,
    textAlign: "center",
  },
});
