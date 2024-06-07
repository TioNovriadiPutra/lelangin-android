import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import useDatePicker from "../../hooks/useDatePicker";
import dayjs from "dayjs";
import { colors } from "../../themes/colors";
import { fonts } from "../../themes/fonts";

const LelanginDatePicker = ({ inputData, control, validationError }) => {
  const { field, onHandleShow } = useDatePicker(inputData, control);

  return (
    <View>
      <Pressable
        style={[
          styles.inputBox,
          { borderColor: validationError ? colors.Danger : colors.Border },
        ]}
        onPress={onHandleShow}
      >
        <Text
          style={[
            styles.input,
            { color: field.value ? colors.Black : colors.Placholder },
          ]}
        >
          {field.value
            ? dayjs(field.value).format("DD-MM-YYYY")
            : inputData.placeholder}
        </Text>
      </Pressable>

      {validationError && (
        <Text style={styles.error}>{validationError.message}</Text>
      )}
    </View>
  );
};

export default LelanginDatePicker;

const styles = StyleSheet.create({
  inputBox: {
    borderWidth: 1.5,
    borderRadius: 10,
    paddingHorizontal: 18,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  input: {
    fontFamily: fonts.Regular,
    fontSize: 14,
    flex: 1,
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
