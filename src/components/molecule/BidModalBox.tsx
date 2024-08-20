import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "@themes/colors";
import { fonts } from "@themes/fonts";
import {
  CurrentBid,
  LelanginBackButton,
  LelanginTextInput,
} from "@components/atom";
import { BidModalData } from "@interfaces/pageInterface";
import { useForm } from "react-hook-form";

type Props = {
  modalData: BidModalData;
};

const BidModalBox = ({ modalData }: Props) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      nominal: undefined,
    },
  });

  return (
    <View style={styles.container}>
      <LelanginBackButton buttonStyles={styles.back} />

      <Text style={styles.title}>Place Bid</Text>

      <CurrentBid highestBid={modalData.highestBid} />

      <LelanginTextInput
        inputData={{
          type: "currency",
          name: "nominal",
          placeholder: "Nominal",
        }}
        control={control}
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
});
