import { StyleSheet, Text, TouchableOpacity, ViewStyle } from "react-native";
import React from "react";
import { fonts } from "@themes/fonts";
import { colors } from "@themes/colors";
import { ButtonType } from "@interfaces/formInterface";

type Props = {
  buttonData: ButtonType;
  buttonStyles?: ViewStyle;
  type?: "box" | "text";
  onPress?: () => void;
};

const LelanginButton = ({
  buttonData,
  buttonStyles,
  type = "box",
  onPress,
}: Props) => {
  return (
    <TouchableOpacity
      style={[
        type === "box" && styles.container,
        type === "box" && { backgroundColor: buttonData.color },
        buttonStyles,
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.label,
          type === "box" ? styles.labelBox : styles.labelText,
          type === "text" && { color: buttonData.color },
        ]}
      >
        {buttonData.label}
      </Text>
    </TouchableOpacity>
  );
};

export default LelanginButton;

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 9,
    borderRadius: 14,
  },
  label: {
    fontFamily: fonts.Medium,
  },
  labelBox: {
    fontSize: 16,
    color: colors.White,
  },
  labelText: {
    fontSize: 14,
  },
});
