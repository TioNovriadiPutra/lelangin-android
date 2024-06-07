import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { fonts } from "../../themes/fonts";
import { colors } from "../../themes/colors";

const AccountMenuButton = ({ menuData, index, onPress }) => {
  return (
    <Pressable
      style={[styles.container, { borderTopWidth: index === 0 ? 1 : 0 }]}
      onPress={onPress}
    >
      <Image source={menuData.icon} />

      <View>
        <Text style={styles.label}>{menuData.label}</Text>

        <Text style={styles.subLabel}>{menuData.subLabel}</Text>
      </View>
    </Pressable>
  );
};

export default AccountMenuButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 10,
    gap: 24,
    borderBottomWidth: 1,
    borderColor: colors.Border,
  },
  label: {
    fontFamily: fonts.Medium,
    fontSize: 14,
    color: colors.Black,
  },
  subLabel: {
    fontFamily: fonts.Regular,
    fontSize: 14,
    color: colors.MediumGrey,
  },
});
