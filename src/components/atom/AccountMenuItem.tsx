import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { AccountMenu } from "@interfaces/pageInterface";
import { colors } from "@themes/colors";
import { fonts } from "@themes/fonts";
import { useNavigation } from "@react-navigation/native";
import { AppStackProps } from "@interfaces/navigationType";
import useAuthController from "@controllers/authController";

type Props = {
  menuData: AccountMenu;
  top: boolean;
};

const AccountMenuItem = ({ menuData, top }: Props) => {
  const nav = useNavigation<AppStackProps>();

  const { logoutService } = useAuthController();

  const onHandlePress = () => {
    if (menuData.destination) {
      nav.navigate(menuData.destination);
    } else {
      logoutService();
    }
  };

  return (
    <TouchableOpacity
      style={[styles.container, { borderTopWidth: top ? 1 : 0 }]}
      onPress={onHandlePress}
    >
      <Image source={menuData.icon} />

      <View>
        <Text style={styles.label}>{menuData.label}</Text>

        <Text>{menuData.subLabel}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default AccountMenuItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 29,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderColor: colors.LightGrey,
    gap: 24,
  },
  label: {
    fontFamily: fonts.SemiBold,
    fontSize: 14,
    color: colors.Black,
  },
  subLabel: {
    fontFamily: fonts.Regular,
    fontSize: 14,
    color: colors.DarkGrey,
  },
});
