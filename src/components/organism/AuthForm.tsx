import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useForm } from "react-hook-form";
import { fonts } from "@themes/fonts";
import { colors } from "@themes/colors";
import { Form, FormFooter } from "@components/molecule";
import { LelanginButton } from "@components/atom";
import { AuthFormType, ButtonType } from "@interfaces/formInterface";
import { Login, Register } from "@interfaces/data/authInterface";

type Props = {
  formData: AuthFormType<Login | Register>;
  onSubmit: (data: any) => void;
};

const AuthForm = ({ formData, onSubmit }: Props) => {
  const { control, handleSubmit } = useForm({
    defaultValues: formData.defaultValue,
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{formData.title}</Text>

      <Form inputListdData={formData.inputs} control={control} />

      {formData.withFooter && <FormFooter />}

      <LelanginButton
        buttonData={formData.buttonData as ButtonType}
        buttonStyles={styles.button}
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  );
};

export default AuthForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 61,
    paddingBottom: 34,
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
