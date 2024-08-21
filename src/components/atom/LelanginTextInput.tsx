import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Control, useController } from "react-hook-form";
import { colors } from "@themes/colors";
import { fonts } from "@themes/fonts";
import { InputType } from "@interfaces/formInterface";

interface ExtendedTextStyle extends TextStyle {
  outlineStyle?: string;
}

type Props = {
  inputData: InputType;
  control: Control<any, any>;
  validationError?: ValidationError;
  align?: "center" | "auto";
};

const LelanginTextInput = ({
  inputData,
  control,
  validationError,
  align,
}: Props) => {
  const [seePass, setSeePass] = useState(false);

  const { field } = useController({
    name: inputData.name,
    control,
  });

  const onHandlePass = () => {
    setSeePass(!seePass);
  };

  return (
    <View
      style={[
        styles.box,
        inputData.type === "password" ? styles.boxPassword : styles.boxText,
        inputData.type === "textarea" && styles.boxTextArea,
        validationError ? styles.boxError : styles.boxNormal,
      ]}
    >
      {validationError && (
        <Text
          style={[
            styles.error,
            inputData.type === "textarea"
              ? styles.errorTextArea
              : styles.errorNormal,
          ]}
        >
          {validationError.message}
        </Text>
      )}

      <TextInput
        value={field.value}
        placeholder={inputData.placeholder}
        placeholderTextColor={colors.Placeholder}
        onChangeText={field.onChange}
        style={[
          styles.input,
          inputData.type === "textarea" && styles.inputTextArea,
          { textAlign: align },
        ]}
        secureTextEntry={inputData.type === "password" ? !seePass : false}
        multiline={inputData.type === "textarea"}
      />

      {inputData.type === "password" && (
        <TouchableOpacity onPress={onHandlePass}>
          <Image
            source={
              seePass
                ? require("@assets/images/unsee.png")
                : require("@assets/images/see.png")
            }
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default LelanginTextInput;

const styles = StyleSheet.create({
  box: {
    paddingHorizontal: 18,
    borderWidth: 1.5,
    borderRadius: 10,
  },
  boxPassword: {
    paddingTop: 9,
    paddingBottom: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  boxText: {
    paddingVertical: 10,
  },
  boxTextArea: {
    height: 356,
  },
  boxError: {
    borderColor: colors.Danger,
  },
  boxNormal: {
    borderColor: colors.Border,
  },
  error: {
    position: "absolute",
    left: 18,
    backgroundColor: colors.White,
    fontFamily: fonts.Regular,
    fontSize: 14,
    color: colors.Danger,
  },
  errorTextArea: {
    top: "102%",
  },
  errorNormal: {
    top: "120%",
  },
  input: {
    flex: 1,
    fontFamily: fonts.Regular,
    fontSize: 14,
    color: colors.Black,
    outlineStyle: "none",
  } as ExtendedTextStyle,
  inputTextArea: {
    textAlignVertical: "top",
  },
});
