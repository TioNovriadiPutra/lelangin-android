import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { API_ENDPOINT } from "../../utils/config/api";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import CountdownTimer from "./CountdownTimer";
import { fonts } from "../../themes/fonts";
import { colors } from "../../themes/colors";
import { currencyFormatter } from "../../utils/helper/currencyFormatter";

dayjs.extend(relativeTime);

const AuctionListCard = ({ cardData }) => {
  return (
    <Pressable style={styles.item}>
      <Image
        source={{
          uri: `${process.env.EXPO_PUBLIC_API_URL}${API_ENDPOINT.getAuctionPic}/${cardData.thumbnail}`,
        }}
        style={styles.image}
      />

      <View style={styles.descContainer}>
        <View style={styles.box}>
          <CountdownTimer timer={cardData.timer} />

          <Text style={styles.title}>{cardData.auction_title}</Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.subTitle}>Highest Bid</Text>

          <Text style={styles.title}>
            {currencyFormatter(cardData.current_bid)}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default AuctionListCard;

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  image: {
    borderRadius: 14,
    width: 138,
    height: 138,
  },
  descContainer: {
    flex: 1,
    gap: 12,
  },
  box: {
    gap: 4,
  },
  title: {
    fontFamily: fonts.Medium,
    fontSize: 14,
    color: colors.Black,
  },
  subTitle: {
    fontFamily: fonts.Regular,
    fontSize: 14,
    color: colors.Grey,
  },
});
