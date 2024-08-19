import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Community } from "@interfaces/data/communityInterface";
import { API_ENDPOINT } from "@configs/api";
import { fonts } from "@themes/fonts";
import { colors } from "@themes/colors";
import { useSetRecoilState } from "recoil";
import { currentCommunityState } from "@store/pageState";

type Props = {
  itemData: Community;
};

const CommunityItem = ({ itemData }: Props) => {
  const setCurrentCommunity = useSetRecoilState(currentCommunityState);

  const onHandlePress = () => {
    setCurrentCommunity(itemData.id);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onHandlePress}>
      <Image
        source={{
          uri: `${process.env.EXPO_PUBLIC_API_URL}${API_ENDPOINT.getCommunityImage}/${itemData.thumbnail}`,
        }}
        style={styles.image}
      />

      <Text style={styles.label}>{itemData.communityName}</Text>
    </TouchableOpacity>
  );
};

export default CommunityItem;

const styles = StyleSheet.create({
  container: {
    width: 68,
  },
  image: {
    width: 68,
    height: 68,
    borderRadius: 50,
  },
  label: {
    fontFamily: fonts.Regular,
    fontSize: 11,
    color: colors.Label,
    textAlign: "center",
  },
});
