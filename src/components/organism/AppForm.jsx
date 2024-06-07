import { StyleSheet, View } from "react-native";
import React from "react";
import AppHeader from "../molecule/AppHeader";
import Form from "../molecule/Form";
import { useForm } from "react-hook-form";

const AppForm = ({ formData, onSubmit }) => {
  const { control, handleSubmit } = useForm({
    defaultValues: formData.defaultValues,
  });

  return (
    <View style={styles.container}>
      <AppHeader
        headerData={formData.headerData}
        onSubmit={handleSubmit((data) => onSubmit(data))}
      />

      <Form inputsData={formData.inputs} control={control} />
    </View>
  );
};

export default AppForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 32,
  },
});
