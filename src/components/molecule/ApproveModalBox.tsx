import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ApproveModalData } from "@interfaces/pageInterface";
import { colors } from "@themes/colors";
import { LelanginBackButton, LelanginButton } from "@components/atom";
import { fonts } from "@themes/fonts";

type Props = {
  modalData: ApproveModalData;
  onClose: () => void;
};

const ApproveModalBox = ({ modalData, onClose }: Props) => {
  return (
    <View style={styles.container}>
      <LelanginBackButton buttonStyles={styles.back} onBack={onClose} />

      <Text style={styles.title}>Approve Bid</Text>

      <Text style={styles.desc}>Process this auction?</Text>

      <LelanginButton
        buttonData={{
          label: "Confirm",
          color: colors.Main,
        }}
        buttonStyles={styles.button}
        onPress={modalData.onApprove}
      />
    </View>
  );
};

export default ApproveModalBox;

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
  desc: {
    fontFamily: fonts.Regular,
    fontSize: 16,
    color: colors.Desc,
    textAlign: "center",
    marginTop: 48,
  },
  button: {
    marginTop: 68,
    width: 184,
  },
});
