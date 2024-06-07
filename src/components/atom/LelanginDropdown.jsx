import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../../themes/colors";
import { fonts } from "../../themes/fonts";
import useDropdown from "../../hooks/useDropdown";

const LelanginDropdown = ({ inputData, control, validationError }) => {
  const { field, onHandleShow } = useDropdown(inputData, control);

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
            {
              color: field.value ? colors.Black : colors.Placholder,
            },
          ]}
        >
          {field.value ? field.value.label : inputData.placeholder}
        </Text>
      </Pressable>

      {validationError && (
        <Text style={styles.error}>{validationError.message}</Text>
      )}
    </View>
  );
};

export default LelanginDropdown;

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
