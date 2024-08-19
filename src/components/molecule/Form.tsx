import { FlatList, ScrollView, StyleSheet } from "react-native";
import React from "react";
import {
  LelanginDropdown,
  LelanginGalleryInput,
  LelanginMoneyInput,
  LelanginProfilePicInput,
  LelanginSwitchInput,
  LelanginTextInput,
  LelanginThumbnailInput,
} from "@components/atom";
import { Control } from "react-hook-form";
import { useRecoilValue } from "recoil";
import { validationErrorState } from "@store/formState";
import { InputType } from "@interfaces/formInterface";

type Props = {
  inputListdData: InputType[];
  control: Control<any, any>;
};

const Form = ({ inputListdData, control }: Props) => {
  const validationError = useRecoilValue(validationErrorState);

  return (
    <FlatList
      data={inputListdData}
      keyExtractor={(_, index) => index.toString()}
      style={styles.list}
      contentContainerStyle={styles.container}
      renderItem={({ item }) => {
        if (
          item.type === "dropdown" ||
          item.type === "date" ||
          item.type === "time"
        ) {
          return (
            <LelanginDropdown
              inputData={item}
              control={control}
              validationError={
                validationError
                  ? validationError.find((error) => error.field === item.name)
                  : undefined
              }
            />
          );
        } else if (item.type === "profile") {
          return (
            <LelanginProfilePicInput
              inputData={item}
              control={control}
              validationError={
                validationError
                  ? validationError.find((error) => error.field === item.name)
                  : undefined
              }
            />
          );
        } else if (item.type === "thumbnail") {
          return (
            <LelanginThumbnailInput
              inputData={item}
              control={control}
              validationError={
                validationError
                  ? validationError.find((error) => error.field === item.name)
                  : undefined
              }
            />
          );
        } else if (item.type === "currency") {
          return (
            <LelanginMoneyInput
              inputData={item}
              control={control}
              validationError={
                validationError
                  ? validationError.find((error) => error.field === item.name)
                  : undefined
              }
            />
          );
        } else if (item.type === "switch") {
          return (
            <LelanginSwitchInput
              inputData={item}
              control={control}
              validationError={
                validationError
                  ? validationError.find((error) => error.field === item.name)
                  : undefined
              }
            />
          );
        } else if (item.type === "galleries") {
          return (
            <LelanginGalleryInput
              inputData={item}
              control={control}
              validationError={
                validationError
                  ? validationError.find((error) => error.field === item.name)
                  : undefined
              }
            />
          );
        }

        return (
          <LelanginTextInput
            inputData={item}
            control={control}
            validationError={
              validationError
                ? validationError.find((error) => error.field === item.name)
                : undefined
            }
          />
        );
      }}
    />
  );
};

export default Form;

const styles = StyleSheet.create({
  container: {
    gap: 14,
    paddingBottom: 100,
  },
  list: {
    flexGrow: 1,
  },
});
