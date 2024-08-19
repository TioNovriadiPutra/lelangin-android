import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { fonts } from "@themes/fonts";
import { colors } from "@themes/colors";
import { DropdownType } from "@interfaces/formInterface";

type Props = {
  itemData: DropdownType;
  active: boolean;
  onPick: (item: DropdownType) => void;
};

const DropdownItem = ({ itemData, active, onPick }: Props) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        active ? styles.containerActive : styles.containerInactive,
      ]}
      onPress={() => onPick(itemData)}
    >
      <Text style={styles.label}>{itemData.label}</Text>

      <View
        style={[
          styles.circle,
          active ? styles.circleActive : styles.circleInactive,
        ]}
      />
    </TouchableOpacity>
  );
};

export default DropdownItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 24,
    borderWidth: 1,
    borderRadius: 14,
  },
  containerActive: {
    borderColor: colors.Accent,
  },
  containerInactive: {
    borderColor: colors.LightGrey,
  },
  label: {
    flex: 1,
    fontFamily: fonts.Medium,
    fontSize: 14,
    color: colors.Black,
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
    borderColor: colors.LightGrey,
  },
});
