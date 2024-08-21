import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ShippingModalData } from "@interfaces/pageInterface";
import {
  LelanginBackButton,
  LelanginButton,
  LelanginTextInput,
} from "@components/atom";
import { useRecoilValue } from "recoil";
import { validationErrorState } from "@store/formState";
import { useForm } from "react-hook-form";
import { colors } from "@themes/colors";
import { fonts } from "@themes/fonts";

type Props = {
  modalData: ShippingModalData;
  onClose: () => void;
};

const ShippingModalBox = ({ modalData, onClose }: Props) => {
  const validationError = useRecoilValue(validationErrorState);

  const { control, handleSubmit } = useForm({
    defaultValues: {
      nominal: undefined,
    },
  });

  return (
    <View style={styles.container}>
      <LelanginBackButton buttonStyles={styles.back} onBack={onClose} />

      <Text style={styles.title}>Shipping</Text>

      <Text style={styles.title}>Input shipping reciept</Text>

      <LelanginTextInput
        inputData={{
          type: "text",
          name: "shippingCode",
          placeholder: "Shipping ID",
        }}
        control={control}
        align="center"
        validationError={
          validationError
            ? validationError.find((error) => error.field === "nominal")
            : undefined
        }
      />

      <LelanginButton
        buttonData={{
          label: "Confirm",
          color: colors.Main,
        }}
        buttonStyles={styles.button}
        onPress={handleSubmit((data: any) => modalData.onSubmit(data))}
      />
    </View>
  );
};

export default ShippingModalBox;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.White,
    width: 370,
    borderRadius: 14,
    padding: 24,
  },
  back: {
    position: "absolute",
    left: 24,
    top: 24,
    zIndex: 999,
  },
  title: {
    fontFamily: fonts.SemiBold,
    fontSize: 16,
    color: colors.Black,
    textAlign: "center",
    marginBottom: 70,
  },
  button: {
    marginTop: 68,
    width: 184,
  },
});
