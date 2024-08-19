import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { InputType } from "@interfaces/formInterface";
import { Control, useController } from "react-hook-form";
import * as ImagePicker from "expo-image-picker";
import { colors } from "@themes/colors";
import { fonts } from "@themes/fonts";
import { API_ENDPOINT } from "@configs/api";

type Props = {
  inputData: InputType;
  control: Control<any, any>;
  validationError?: ValidationError;
};

const LelanginThumbnailInput = ({
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
      });
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, field.value === null && styles.buttonEmpty]}
        onPress={onPickImage}
      >
        <Image
          source={
            field.value
              ? {
                  uri:
                    typeof field.value === "object"
                      ? field.value.uri
                      : `${process.env.EXPO_PUBLIC_URL}${API_ENDPOINT.getCommunityImage}/${field.value}`,
                }
              : require("@assets/images/thumbnail.png")
          }
          style={field.value && styles.button}
        />
      </TouchableOpacity>

      <Text style={styles.placeholder}>{inputData.placeholder}</Text>
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
    width: 258,
    height: 124,
    borderRadius: 18,
  },
  buttonEmpty: {
    borderWidth: 3,
    borderStyle: "dashed",
    borderColor: colors.Placeholder,
    justifyContent: "center",
    alignItems: "center",
  },
  placeholder: {
    fontFamily: fonts.Regular,
    fontSize: 14,
    color: colors.Placeholder,
    textAlign: "center",
  },
});
