import { Image, Pressable, StyleSheet, View } from "react-native";
import React from "react";
import { colors } from "../../themes/colors";
import useProfilePicker from "../../hooks/useProfilePicker";
import useUserController from "../../controllers/userController";
import ProfilePicSkeleton from "../skeleton/ProfilePicSkeleton";

const LelanginProfilePicker = ({ inputData, control, validationError }) => {
  const { field, onHandlePick } = useProfilePicker(inputData, control);

  const { useGetUserProfilePicQuery } = useUserController();

  const { uri, isLoading } = useGetUserProfilePicQuery(
    typeof field.value === "string" ? field.value : "nofile"
  );

  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={onHandlePick}>
        {field.value ? (
          typeof field.value === "string" ? (
            isLoading ? (
              <ProfilePicSkeleton />
            ) : (
              <Image
                source={{
                  uri: uri,
                }}
                style={styles.button}
              />
            )
          ) : (
            <Image
              source={{
                uri: field.value.uri,
              }}
              style={styles.button}
            />
          )
        ) : null}

        <View style={styles.circle}>
          <View style={styles.circle2}>
            <Image source={require("../../assets/images/edit.png")} />
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default LelanginProfilePicker;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 32,
  },
  button: {
    width: 84,
    height: 84,
    borderRadius: 50,
    backgroundColor: colors.Placholder,
  },
  circle: {
    position: "absolute",
    padding: 2,
    borderRadius: 50,
    backgroundColor: colors.White,
    right: 0,
    bottom: -5,
  },
  circle2: {
    width: 24,
    height: 24,
    borderRadius: 50,
    backgroundColor: colors.Accent,
    justifyContent: "center",
    alignItems: "center",
  },
});
