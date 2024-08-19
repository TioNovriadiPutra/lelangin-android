import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { InputType } from "@interfaces/formInterface";
import { Control, useController } from "react-hook-form";
import { fonts } from "@themes/fonts";
import { colors } from "@themes/colors";
import { Switch } from "react-native-switch";

type Props = {
  inputData: InputType;
  control: Control<any, any>;
  validationError?: ValidationError;
};

const LelanginSwitchInput = ({
  inputData,
  control,
  validationError,
}: Props) => {
  const { field } = useController({
    name: inputData.name,
    control,
  });

  return (
    <View style={styles.container}>
      {validationError && (
        <Text style={styles.error}>{validationError.message}</Text>
      )}

      <Text style={styles.placeholder}>{inputData.placeholder}</Text>

      <Switch
        value={field.value}
        onValueChange={(val: boolean) => field.onChange(val)}
        renderActiveText={false}
        renderInActiveText={false}
        circleSize={22}
        barHeight={26}
        switchLeftPx={3}
        switchRightPx={3}
        backgroundActive={colors.Accent}
      />
    </View>
  );
};

export default LelanginSwitchInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  placeholder: {
    fontFamily: fonts.Medium,
    fontSize: 14,
    color: colors.Black,
  },
  error: {
    position: "absolute",
    top: "75%",
    backgroundColor: colors.White,
    fontFamily: fonts.Regular,
    fontSize: 14,
    color: colors.Danger,
  },
});
