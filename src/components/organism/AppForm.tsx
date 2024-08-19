import { StyleSheet, View } from "react-native";
import React from "react";
import { AppHeader, Form } from "@components/molecule";
import { AppFormType } from "@interfaces/formInterface";
import { useForm } from "react-hook-form";
import { AppHeaderButton } from "@interfaces/pageInterface";

type Props = {
  formData: AppFormType<any>;
};

const AppForm = ({ formData }: Props) => {
  const { control, handleSubmit } = useForm({
    defaultValues: formData.defaultValue,
  });

  return (
    <View style={styles.container}>
      <AppHeader
        title={formData.title}
        withBack
        buttonData={formData.buttonData as AppHeaderButton}
        onSubmit={handleSubmit((data: any) => formData.onSubmit(data))}
      />

      <View style={styles.content}>
        <Form inputListdData={formData.inputs} control={control} />
      </View>
    </View>
  );
};

export default AppForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 14,
  },
});
