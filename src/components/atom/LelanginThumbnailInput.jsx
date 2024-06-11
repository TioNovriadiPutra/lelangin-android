import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../../themes/colors";
import useProfilePicker from "../../hooks/useProfilePicker";
import { fonts } from "../../themes/fonts";

const LelanginThumbnailInput = ({ inputData, control, validationError }) => {
  const { field, onHandlePick } = useProfilePicker(inputData, control);

  return (
    <View style={styles.container}>
      {validationError && (
        <Text style={styles.error}>{validationError.message}</Text>
      )}

      <Pressable
        style={[
          styles.button,
          field.value ? styles.buttonActive : styles.buttonInactive,
        ]}
        onPress={onHandlePick}
      >
        <Image
          source={
            field.value
              ? { uri: field.value.uri }
              : require("../../assets/images/thumbnail.png")
          }
          style={field.value ? styles.thumbnail : styles.placeholder}
        />
      </Pressable>

      <Text style={styles.text}>{inputData.placeholder}</Text>
    </View>
  );
};

export default LelanginThumbnailInput;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 10,
  },
  button: {
    height: 124,
    width: 258,
    borderColor: colors.Placholder,
    borderRadius: 18,
  },
  buttonActive: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  buttonInactive: {
    borderWidth: 3,
    borderStyle: "dashed",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: fonts.Regular,
    fontSize: 14,
    color: colors.Placholder,
    textAlign: "center",
  },
  thumbnail: {
    width: 258,
    height: 124,
    borderRadius: 18,
  },
  error: {
    fontFamily: fonts.Regular,
    fontSize: 14,
    color: colors.Danger,
    position: "absolute",
    top: "100%",
  },
});
