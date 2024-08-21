import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "@themes/colors";
import { fonts } from "@themes/fonts";
import {
  CurrentBid,
  LelanginBackButton,
  LelanginButton,
  LelanginMoneyInput,
} from "@components/atom";
import { BidModalData } from "@interfaces/pageInterface";
import { useForm } from "react-hook-form";
import { useRecoilValue } from "recoil";
import { validationErrorState } from "@store/formState";

type Props = {
  modalData: BidModalData;
  onClose: () => void;
};

const BidModalBox = ({ modalData, onClose }: Props) => {
  const validationError = useRecoilValue(validationErrorState);

  const { control, handleSubmit } = useForm({
    defaultValues: {
      nominal: undefined,
    },
  });

  return (
    <View style={styles.container}>
      <LelanginBackButton buttonStyles={styles.back} onBack={onClose} />

      <Text style={styles.title}>Place Bid</Text>

      <CurrentBid highestBid={modalData.highestBid} />

      <LelanginMoneyInput
        inputData={{
          type: "currency",
          name: "nominal",
          placeholder: "Nominal",
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
          label: "Place Bid",
          color: colors.Main,
        }}
        buttonStyles={styles.button}
        onPress={handleSubmit((data: any) => modalData.onBid(data))}
      />
    </View>
  );
};

export default BidModalBox;

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
  },
  button: {
    marginTop: 68,
    width: 184,
  },
});
