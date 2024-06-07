import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../../themes/colors";
import { fonts } from "../../themes/fonts";
import useUserController from "../../controllers/userController";
import ProfilePicSkeleton from "../skeleton/ProfilePicSkeleton";

const AccountHeaderProfile = ({ profilePic, name }) => {
  const { useGetUserProfilePicQuery } = useUserController();

  let profileFetch = null;

  if (profilePic) {
    profileFetch = useGetUserProfilePicQuery(profilePic);
  }

  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        {profileFetch ? (
          profileFetch.isLoading ? (
            <ProfilePicSkeleton />
          ) : (
            <Image source={{ uri: profileFetch.uri }} style={styles.circle} />
          )
        ) : null}
      </View>

      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

export default AccountHeaderProfile;

const styles = StyleSheet.create({
  container: {
    gap: 6,
    alignItems: "center",
  },
  circle: {
    width: 84,
    height: 84,
    borderRadius: 50,
    backgroundColor: colors.Placholder,
  },
  name: {
    fontFamily: fonts.SemiBold,
    fontSize: 18,
    color: colors.Black,
    textAlign: "center",
  },
});
