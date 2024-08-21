import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "@themes/colors";
import { fonts } from "@themes/fonts";

type Props = {
  label: string;
  active: boolean;
  onPress: () => void;
};

const SwitchButton = ({ label, active, onPress }: Props) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        active ? styles.buttonActive : styles.buttonInactive,
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.label,
          { color: active ? colors.Accent : colors.Inactive },
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default SwitchButton;

const styles = StyleSheet.create({
  button: {
    flex: 1,
    paddingTop: 24,
    paddingBottom: 14,
    alignItems: "center",
  },
  buttonActive: {
    borderBottomWidth: 4,
    borderBottomColor: colors.Accent,
  },
  buttonInactive: {
    borderBottomWidth: 1,
    borderBottomColor: colors.LightGrey,
  },
  label: {
    fontFamily: fonts.Medium,
    fontSize: 16,
  },
});
