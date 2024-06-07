import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { fonts } from "../../themes/fonts";
import { colors } from "../../themes/colors";

const DropdownItem = ({ itemData, active, onPick }) => {
  return (
    <Pressable
      style={[
        styles.container,
        { borderColor: active ? colors.Accent : colors.Border },
      ]}
      onPress={onPick}
    >
      <Text style={styles.label}>{itemData.label}</Text>

      <View
        style={[
          styles.circle,
          active ? styles.circleActive : styles.circleInactive,
        ]}
      />
    </Pressable>
  );
};

export default DropdownItem;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 14,
  },
  label: {
    fontFamily: fonts.Medium,
    fontSize: 14,
    color: colors.Black,
    flex: 1,
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 50,
  },
  circleActive: {
    borderWidth: 6,
    borderColor: colors.Accent,
  },
  circleInactive: {
    borderWidth: 1,
    borderColor: colors.Border,
  },
});
