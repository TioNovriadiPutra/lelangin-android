import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { fonts } from "../../themes/fonts";
import { colors } from "../../themes/colors";
import Form from "../molecule/Form";
import { useForm } from "react-hook-form";
import FormFooter from "../molecule/FormFooter";
import LelanginSubmitButton from "../atom/LelanginSubmitButton";

const AuthForm = ({ formData, containerStyles, onSubmit }) => {
  const { control, handleSubmit } = useForm({
    defaultValues: formData.defaultValues,
  });

  return (
    <View style={[styles.container, containerStyles]}>
      <Text style={styles.title}>{formData.title}</Text>

      <Form inputsData={formData.inputs} control={control} />

      {formData.withFooter && <FormFooter />}

      <LelanginSubmitButton
        label={formData.submitButton.label}
        color={formData.submitButton.color}
        buttonStyles={styles.button}
        onPress={handleSubmit((data) => onSubmit(data))}
      />
    </View>
  );
};

export default AuthForm;

const styles = StyleSheet.create({
  container: {
    marginBottom: 34,
  },
  title: {
    fontFamily: fonts.SemiBold,
    fontSize: 36,
    color: colors.Black,
    textAlign: "center",
    marginBottom: 45,
  },
  button: {
    width: 184,
  },
});
