import { StyleSheet, Text, TextInput, TextStyle, View } from "react-native";
import React from "react";
import { colors } from "@themes/colors";
import { fonts } from "@themes/fonts";
import { InputType } from "@interfaces/formInterface";
import { Control, useController } from "react-hook-form";
import { monyConverter } from "@helpers/converter";

interface ExtendedTextStyle extends TextStyle {
  outlineStyle?: string;
}

type Props = {
  inputData: InputType;
  control: Control<any, any>;
  validationError?: ValidationError;
};

const LelanginMoneyInput = ({ inputData, control, validationError }: Props) => {
  const { field } = useController({
    name: inputData.name,
    control,
  });

  const handleCurrencyChange = (text: string) => {
    let inputValue = text;

    inputValue = inputValue.replace(/[^0-9]/g, "");

    field.onChange(monyConverter(inputValue ? parseInt(inputValue) : 0));
  };

  return (
    <View
      style={[styles.box, validationError ? styles.boxError : styles.boxNormal]}
    >
      {validationError && (
        <Text style={styles.error}>{validationError.message}</Text>
      )}

      <TextInput
        value={field.value}
        placeholder={inputData.placeholder}
        placeholderTextColor={colors.Placeholder}
        onChangeText={handleCurrencyChange}
        style={styles.input}
        keyboardType="number-pad"
      />
    </View>
  );
};

export default LelanginMoneyInput;

const styles = StyleSheet.create({
  box: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 18,
    borderWidth: 1.5,
    borderRadius: 10,
    paddingVertical: 10,
  },
  boxError: {
    borderColor: colors.Danger,
  },
  boxNormal: {
    borderColor: colors.Border,
  },
  error: {
    position: "absolute",
    top: "120%",
    left: 18,
    backgroundColor: colors.White,
    fontFamily: fonts.Regular,
    fontSize: 14,
    color: colors.Danger,
  },
  input: {
    flex: 1,
    fontFamily: fonts.Regular,
    fontSize: 14,
    color: colors.Black,
    outlineStyle: "none",
  } as ExtendedTextStyle,
});
