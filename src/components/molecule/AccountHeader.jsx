import { StyleSheet, View } from "react-native";
import React from "react";
import AccountHeaderProfile from "../atom/AccountHeaderProfile";
import LelanginSubmitButton from "../atom/LelanginSubmitButton";
import { colors } from "../../themes/colors";
import { useNavigation } from "@react-navigation/native";

const AccountHeader = ({ profileData }) => {
  const nav = useNavigation();

  const onHandleEdit = () => {
    nav.navigate("AccountRoute", {
      screen: "AccountEdit",
    });
  };

  return (
    <View style={styles.container}>
      <AccountHeaderProfile
        profilePic={profileData.profilePic}
        name={profileData.fullName}
      />

      <LelanginSubmitButton
        label="Edit Profile"
        color={colors.Main}
        buttonStyles={styles.button}
        onPress={onHandleEdit}
      />
    </View>
  );
};

export default AccountHeader;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 61,
    gap: 12,
  },
  button: {
    paddingHorizontal: 20,
  },
});
