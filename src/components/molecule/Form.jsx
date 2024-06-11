import { FlatList, StyleSheet } from "react-native";
import React from "react";
import LelanginTextInput from "../atom/LelanginTextInput";
import LelanginDropdown from "../atom/LelanginDropdown";
import LelanginDatePicker from "../atom/LelanginDatePicker";
import useCustomForm from "../../hooks/useCustomForm";
import LelanginProfilePicker from "../atom/LelanginProfilePicker";
import LelanginThumbnailInput from "../atom/LelanginThumbnailInput";

const Form = ({ inputsData, control }) => {
  const { onHandleValidation } = useCustomForm();

  return (
    <FlatList
      data={inputsData}
      keyExtractor={(_, index) => index.toString()}
      contentContainerStyle={styles.list}
      renderItem={({ item }) => {
        if (item.type === "dropdown") {
          return (
            <LelanginDropdown
              inputData={item}
              control={control}
              validationError={onHandleValidation(item.name)}
            />
          );
        } else if (item.type === "date") {
          return (
            <LelanginDatePicker
              inputData={item}
              control={control}
              validationError={onHandleValidation(item.name)}
            />
          );
        } else if (item.type === "profile") {
          return (
            <LelanginProfilePicker
              inputData={item}
              control={control}
              validationError={onHandleValidation(item.name)}
            />
          );
        } else if (item.type === "thumbnail") {
          return (
            <LelanginThumbnailInput
              inputData={item}
              control={control}
              validationError={onHandleValidation(item.name)}
            />
          );
        }

        return (
          <LelanginTextInput
            inputData={item}
            control={control}
            validationError={onHandleValidation(item.name)}
          />
        );
      }}
    />
  );
};

export default Form;

const styles = StyleSheet.create({
  list: {
    gap: 24,
  },
});
