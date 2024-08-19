import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { colors } from "@themes/colors";
import { fonts } from "@themes/fonts";

type Props = {
  label: string;
  active: boolean;
  onPress: () => void;
};

const OvalButton = ({ label, active, onPress }: Props) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        { backgroundColor: active ? colors.Accent : colors.DarkWhite },
      ]}
      onPress={onPress}
    >
      <Text
        style={[styles.label, { color: active ? colors.White : colors.Label }]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default OvalButton;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 19,
    paddingVertical: 9.5,
    borderRadius: 14,
  },
  label: {
    fontFamily: fonts.Medium,
    fontSize: 14,
  },
});
