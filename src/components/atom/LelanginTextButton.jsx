import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import { fonts } from "../../themes/fonts";
import { colors } from "../../themes/colors";

const LelanginTextButton = ({ label, color = colors.Accent, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <Text style={[styles.label, { color }]}>{label}</Text>
    </Pressable>
  );
};

export default LelanginTextButton;

const styles = StyleSheet.create({
  label: {
    fontFamily: fonts.Medium,
    fontSize: 14,
  },
});
