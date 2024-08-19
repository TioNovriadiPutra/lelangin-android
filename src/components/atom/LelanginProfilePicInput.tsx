import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { InputType } from "@interfaces/formInterface";
import { Control, useController } from "react-hook-form";
import { colors } from "@themes/colors";
import * as ImagePicker from "expo-image-picker";
import { fonts } from "@themes/fonts";
import { API_ENDPOINT } from "@configs/api";

type Props = {
  inputData: InputType;
  control: Control<any, any>;
  validationError?: ValidationError;
};

const LelanginProfilePicInput = ({
  inputData,
  control,
  validationError,
}: Props) => {
  const { field } = useController({
    name: inputData.name,
    control,
  });

  const onPickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      field.onChange({
        uri: result.assets[0].uri,
        type: result.assets[0].mimeType,
        name: result.assets[0].fileName,
      });
    }
  };

  return (
    <View style={styles.container}>
      {validationError && (
        <Text style={styles.error}>{validationError.message}</Text>
      )}

      <TouchableOpacity style={styles.button} onPress={onPickImage}>
        {field.value && (
          <Image
            source={{
              uri:
                typeof field.value === "object"
                  ? field.value.uri
                  : `${process.env.EXPO_PUBLIC_API_URL}${API_ENDPOINT.getUserImage}/${field.value}`,
            }}
            style={styles.image}
          />
        )}

        <View style={styles.circle1}>
          <View style={styles.circle2}>
            <Image source={require("@assets/images/edit.png")} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default LelanginProfilePicInput;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 18,
    paddingBottom: 38,
  },
  button: {
    width: 84,
    height: 84,
    backgroundColor: colors.Placeholder,
    borderRadius: 50,
  },
  image: {
    width: 84,
    height: 84,
    borderRadius: 50,
  },
  circle1: {
    position: "absolute",
    right: 0,
    bottom: -4,
    backgroundColor: colors.White,
    borderRadius: 50,
    padding: 2,
  },
  circle2: {
    width: 24,
    height: 24,
    backgroundColor: colors.Accent,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  error: {
    position: "absolute",
    top: "80%",
    backgroundColor: colors.White,
    fontFamily: fonts.Regular,
    fontSize: 14,
    color: colors.Danger,
  },
});
