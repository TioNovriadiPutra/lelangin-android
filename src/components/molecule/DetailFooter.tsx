import { StyleSheet, View } from "react-native";
import React from "react";
import { LelanginButton } from "@components/atom";
import { colors } from "@themes/colors";

type Props = {
  type: "mine" | "bid" | "buyNow" | "payment";
  onBid: () => void;
};

const DetailFooter = ({ type, onBid }: Props) => {
  return (
    <View style={styles.container}>
      {type === "mine" || type === "buyNow" ? (
        <LelanginButton
          buttonData={{
            label: type === "buyNow" ? "Buy Now" : "Delete",
            color: colors.Accent,
          }}
          buttonStyles={styles.buy}
        />
      ) : null}

      <LelanginButton
        buttonData={{
          label:
            type === "mine"
              ? "Approve"
              : type === "payment"
              ? "Confirm Payment"
              : "Place Bid Now",
          color: colors.Main,
        }}
        buttonStyles={styles.bid}
        onPress={onBid}
      />
    </View>
  );
};

export default DetailFooter;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.White,
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    shadowColor: colors.Shadow,
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: -1,
    },
    shadowRadius: 10,
    elevation: 5,
    gap: 14,
  },
  buy: {
    flex: 1,
  },
  bid: {
    flex: 2,
  },
});
