import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { InputType } from "@interfaces/formInterface";
import { Control, useFieldArray } from "react-hook-form";
import { colors } from "@themes/colors";
import * as ImagePicker from "expo-image-picker";
import { fonts } from "@themes/fonts";

type Props = {
  inputData: InputType;
  control: Control<any, any>;
  validationError?: ValidationError;
};

const LelanginGalleryInput = ({
  inputData,
  control,
  validationError,
}: Props) => {
  const { fields, append, remove } = useFieldArray({
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
      append({ uri: result.assets[0].uri, type: result.assets[0].mimeType });
    }
  };

  const onRemoveImage = async (index: number) => {
    remove(index);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPickImage}>
        <Image source={require("@assets/images/thumbnail.png")} />
      </TouchableOpacity>

      <Text style={styles.placeholder}>{inputData.placeholder}</Text>

      <ScrollView
        horizontal
        style={styles.contentList}
        contentContainerStyle={styles.list}
      >
        {fields.map((field, index) => (
          <View key={field.id}>
            <Image source={{ uri: field.uri }} style={styles.image} />

            <TouchableOpacity
              style={styles.delete}
              onPress={() => onRemoveImage(index)}
            >
              <View style={styles.circle}>
                <View style={styles.bar} />
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default LelanginGalleryInput;

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
  button: {
    width: 258,
    height: 124,
    borderRadius: 18,
    borderWidth: 3,
    borderStyle: "dashed",
    borderColor: colors.Placeholder,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  placeholder: {
    fontFamily: fonts.Regular,
    fontSize: 14,
    color: colors.Placeholder,
    textAlign: "center",
  },
  contentList: {
    height: 54,
  },
  list: {
    gap: 10,
  },
  image: {
    width: 54,
    height: 54,
    borderRadius: 8,
  },
  delete: {
    position: "absolute",
    right: -2,
    top: -2,
    backgroundColor: colors.White,
    borderRadius: 50,
    padding: 2,
  },
  circle: {
    width: 12,
    height: 12,
    borderRadius: 50,
    backgroundColor: colors.Danger,
    justifyContent: "center",
    alignItems: "center",
  },
  bar: {
    width: 6,
    borderWidth: 1,
    borderColor: colors.White,
  },
});
