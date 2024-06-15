import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { fonts } from "../../themes/fonts";
import { colors } from "../../themes/colors";
import { API_ENDPOINT } from "../../utils/config/api";
import { useSetRecoilState } from "recoil";
import { currentCommunityState } from "../../store/pageState";
import { queryClient } from "../../utils/config/client";

const CommunityListButton = ({ buttonData }) => {
  const setCurrentCommunity = useSetRecoilState(currentCommunityState);

  const onHandlePress = async () => {
    setCurrentCommunity(buttonData.id);

    await queryClient.refetchQueries({
      queryKey: ["getAuctionsByCommunity"],
    });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onHandlePress}>
      <Image
        source={{
          uri: `${process.env.EXPO_PUBLIC_API_URL}${API_ENDPOINT.getCommunityPic}/${buttonData.community_image}`,
        }}
        style={styles.image}
      />

      <Text style={styles.label} ellipsizeMode="tail" numberOfLines={1}>
        {buttonData.community_name}
      </Text>
    </TouchableOpacity>
  );
};

export default CommunityListButton;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: 68,
  },
  image: {
    width: 68,
    height: 68,
    borderRadius: 50,
  },
  label: {
    fontFamily: fonts.Regular,
    fontSize: 14,
    color: colors.LabelGrey,
    textAlign: "center",
  },
});
