import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { colors } from "../../themes/colors";
import useTextInput from "../../hooks/useTextInput";
import { fonts } from "../../themes/fonts";

const HEIGHT = Dimensions.get("window").height;

const LelanginTextInput = ({ inputData, control, validationError }) => {
  const { showPassword, field, onHandleShowPassword } = useTextInput(
    inputData,
    control
  );

  return (
    <View style={inputData.type === "textarea" && styles.container}>
      <View
        style={[
          styles.inputBox,
          inputData.type === "password"
            ? styles.inputBoxIcon
            : styles.inputBoxNormal,
          inputData.type === "textarea" && styles.inputBoxTextArea,
          { borderColor: validationError ? colors.Danger : colors.Border },
        ]}
      >
        <TextInput
          value={field.value}
          placeholder={inputData.placeholder}
          placeholderTextColor={colors.Placholder}
          onChangeText={field.onChange}
          style={[
            styles.input,
            inputData.type === "textarea" && styles.inputTextArea,
          ]}
          secureTextEntry={
            inputData.type === "password" ? !showPassword : false
          }
          multiline={inputData.type === "textarea"}
        />

        {inputData.type === "password" && (
          <Pressable onPress={onHandleShowPassword}>
            <Image
              source={
                showPassword
                  ? require("../../assets/images/see.png")
                  : require("../../assets/images/unsee.png")
              }
            />
          </Pressable>
        )}
      </View>

      {validationError && (
        <Text style={styles.error}>{validationError.message}</Text>
      )}
    </View>
  );
};

export default LelanginTextInput;

const styles = StyleSheet.create({
  container: {
    height: HEIGHT / 2,
  },
  inputBox: {
    borderWidth: 1.5,
    borderRadius: 10,
    paddingHorizontal: 18,
  },
  inputBoxNormal: {
    paddingVertical: 10,
  },
  inputBoxIcon: {
    paddingTop: 9,
    paddingBottom: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  inputBoxTextArea: {
    flex: 1,
  },
  input: {
    fontFamily: fonts.Regular,
    fontSize: 14,
    color: colors.Black,
    flex: 1,
    outlineStyle: "none",
  },
  inputTextArea: {
    textAlignVertical: "top",
  },
  error: {
    fontFamily: fonts.Regular,
    fontSize: 14,
    color: colors.Danger,
    position: "absolute",
    left: 18,
    top: "100%",
  },
});
