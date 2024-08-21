import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Auction } from "@interfaces/data/auctionInterface";
import { fonts } from "@themes/fonts";
import { colors } from "@themes/colors";
import useAuctionItemDesc from "@hooks/useAuctionItemDesc";
import { monyConverter } from "@helpers/converter";
import { useNavigation } from "@react-navigation/native";
import { AppStackProps } from "@interfaces/navigationType";
import { useSetRecoilState } from "recoil";
import { shippingModalSelector } from "@store/pageState";
import useAuctionController from "@controllers/auctionController";

type Props = {
  itemData: Auction;
  type: "normal" | "order";
};

const AuctionItemDesc = ({ itemData, type }: Props) => {
  const setShipping = useSetRecoilState(shippingModalSelector);

  const nav = useNavigation<AppStackProps>();

  const { shippingAuctionService } = useAuctionController();

  const { time, done } = useAuctionItemDesc(itemData.timer);

  console.log(itemData.status);

  const onHandleDetail = () => {
    if (type === "order") {
      if (itemData.status === "Finish") {
        nav.navigate("AuctionPayment", {
          id: itemData.id,
          auctionName: itemData.auctionName,
          highestBid: itemData.highestBid,
          status: itemData.status,
          galleries: itemData.galleries,
        });
      } else {
        nav.navigate("AuctionDetail", {
          id: itemData.id,
        });
      }
    } else if (itemData.status === "Shipping") {
      setShipping({
        show: true,
        data: {
          onSubmit: (data: any) =>
            shippingAuctionService({ id: itemData.id, data }),
        },
      });
    } else {
      nav.navigate("AuctionDetail", {
        id: itemData.id,
      });
    }
  };

  console.log(itemData.status);

  return (
    <TouchableOpacity style={styles.container} onPress={onHandleDetail}>
      <View style={styles.descContainer}>
        <Text
          style={[
            styles.desc,
            {
              color:
                type === "order"
                  ? colors.Success
                  : done || itemData.status === "Finish"
                  ? colors.Danger
                  : colors.Success,
            },
          ]}
        >
          {type === "order"
            ? itemData.status
            : done || itemData.status === "Finish"
            ? "Ended"
            : time}
        </Text>

        <Text style={[styles.desc, styles.title]}>{itemData.auctionName}</Text>
      </View>

      <View style={styles.descContainer}>
        <Text style={styles.label}>Highest Bid</Text>

        <Text style={[styles.desc, styles.title]}>
          {monyConverter(itemData.highestBid)}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default AuctionItemDesc;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 12,
  },
  descContainer: {
    gap: 4,
  },
  desc: {
    fontFamily: fonts.Medium,
    fontSize: 14,
  },
  title: {
    color: colors.Title,
  },
  label: {
    fontFamily: fonts.Regular,
    fontSize: 14,
    color: colors.Inactive,
  },
});
