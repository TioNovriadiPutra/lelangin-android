import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Control, useController } from "react-hook-form";
import { colors } from "@themes/colors";
import { fonts } from "@themes/fonts";
import { useSetRecoilState } from "recoil";
import { dateModalSelector, dropdownModalSelector } from "@store/formState";
import { DropdownType, InputType } from "@interfaces/formInterface";
import dayjs from "dayjs";
import { DateType } from "react-native-ui-datepicker";

type Props = {
  inputData: InputType;
  control: Control<any, any>;
  validationError?: ValidationError;
};

const LelanginDropdown = ({ inputData, control, validationError }: Props) => {
  const setDropdownModal = useSetRecoilState(dropdownModalSelector);
  const setDateModal = useSetRecoilState(dateModalSelector);

  const { field } = useController({
    name: inputData.name,
    control,
  });

  const onHandleModal = () => {
    if (inputData.type === "dropdown") {
      setDropdownModal({
        show: true,
        data: {
          current: field.value,
          items: inputData.items,
          onPick: (item: DropdownType) => field.onChange(item),
        },
      });
    } else {
      setDateModal({
        show: true,
        data: {
          type: inputData.type as "date" | "time",
          onPick: (date: DateType) =>
            field.onChange(
              dayjs(date).format(
                inputData.type === "date" ? "DD-MM-YYYY" : "DD-MM-YYYY, HH:mm"
              )
            ),
        },
      });
    }
  };

  return (
    <TouchableOpacity
      style={[styles.box, validationError ? styles.boxError : styles.boxNormal]}
      onPress={onHandleModal}
    >
      {validationError && (
        <Text style={styles.error}>{validationError.message}</Text>
      )}

      <Text
        style={[
          styles.input,
          field.value ? styles.inputValue : styles.inputPlaceholder,
        ]}
      >
        {field.value
          ? inputData.type === "date" || inputData.type === "time"
            ? field.value
            : field.value.label
          : inputData.placeholder}
      </Text>
    </TouchableOpacity>
  );
};

export default LelanginDropdown;

const styles = StyleSheet.create({
  box: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderWidth: 1.5,
    borderRadius: 10,
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
  },
  inputValue: {
    color: colors.Black,
  },
  inputPlaceholder: {
    color: colors.Placeholder,
  },
});
