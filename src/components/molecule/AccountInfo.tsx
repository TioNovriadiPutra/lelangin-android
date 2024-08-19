import { StyleSheet, View } from "react-native";
import React from "react";
import { User } from "@interfaces/data/userInterface";
import { AccountHeader, LelanginButton } from "@components/atom";
import { colors } from "@themes/colors";
import { useNavigation } from "@react-navigation/native";
import { AppStackProps } from "@interfaces/navigationType";

type Props = {
  infoData: User;
};

const AccountInfo = ({ infoData }: Props) => {
  const nav = useNavigation<AppStackProps>();

  const onHandleNav = () => {
    nav.navigate("AccountEdit");
  };

  return (
    <View style={styles.container}>
      <AccountHeader
        profilePic={infoData.profilePic}
        fullName={infoData.fullName}
      />

      <LelanginButton
        buttonData={{
          label: "Edit Profile",
          color: colors.Black,
        }}
        buttonStyles={styles.button}
        onPress={onHandleNav}
      />
    </View>
  );
};

export default AccountInfo;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 61,
    paddingBottom: 51,
    gap: 12,
  },
  button: {
    paddingHorizontal: 20,
  },
});
