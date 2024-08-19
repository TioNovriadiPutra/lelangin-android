import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { API_ENDPOINT } from "@configs/api";
import { colors } from "@themes/colors";
import { fonts } from "@themes/fonts";

type Props = {
  profilePic: string | null;
  fullName: string;
};

const AccountHeader = ({ profilePic, fullName }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        {profilePic && (
          <Image
            source={{
              uri: `${process.env.EXPO_PUBLIC_API_URL}${API_ENDPOINT.getUserImage}/${profilePic}`,
            }}
            style={styles.circle}
          />
        )}
      </View>

      <Text style={styles.name}>{fullName}</Text>
    </View>
  );
};

export default AccountHeader;

const styles = StyleSheet.create({
  container: {
    gap: 6,
    alignItems: "center",
  },
  circle: {
    width: 84,
    height: 84,
    borderRadius: 50,
    backgroundColor: colors.Placeholder,
  },
  name: {
    height: 27,
    fontFamily: fonts.SemiBold,
    fontSize: 18,
    color: colors.Black,
  },
});
