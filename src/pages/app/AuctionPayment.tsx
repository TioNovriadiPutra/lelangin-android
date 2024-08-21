import { StyleSheet, View } from "react-native";
import React from "react";
import MainContainer from "@containers/MainContainer";
import {
  AppHeader,
  DetailFooter,
  PaymentItem,
  Summary,
} from "@components/molecule";
import useAuctionController from "@controllers/auctionController";

const AuctionPayment = ({ route }) => {
  const { id, auctionName, highestBid, status, galleries } = route.params;

  const { paymentAuctionService } = useAuctionController();

  return (
    <MainContainer>
      <AppHeader title="Payment" withBack />

      <View style={{ flex: 1 }}>
        <PaymentItem
          auctionName={auctionName}
          highestBid={highestBid}
          galleries={galleries}
        />

        <Summary highestBid={highestBid} />
      </View>

      {status !== "Finish" && (
        <DetailFooter type="payment" onBid={() => paymentAuctionService(id)} />
      )}
    </MainContainer>
  );
};

export default AuctionPayment;

const styles = StyleSheet.create({});
