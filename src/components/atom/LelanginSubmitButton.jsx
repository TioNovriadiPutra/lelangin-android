import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import { fonts } from "../../themes/fonts";
import { colors } from "../../themes/colors";

const LelanginSubmitButton = ({ label, color, buttonStyles, onPress }) => {
  return (
    <Pressable
      style={[styles.container, { backgroundColor: color }, buttonStyles]}
      onPress={onPress}
    >
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
};

export default LelanginSubmitButton;

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    paddingVertical: 9,
    borderRadius: 14,
    alignItems: "center",
  },
  label: {
    fontFamily: fonts.Medium,
    fontSize: 16,
    color: colors.White,
  },
});
