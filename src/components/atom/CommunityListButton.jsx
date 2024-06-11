import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { fonts } from "../../themes/fonts";
import { colors } from "../../themes/colors";

const CommunityListButton = ({ buttonData, fetchImage }) => {
  const { uri, isLoading } = fetchImage(buttonData.community_image);

  return (
    <View style={styles.container}>
      {!isLoading && <Image source={{ uri }} style={styles.image} />}

      <Text style={styles.label} ellipsizeMode="tail" numberOfLines={1}>
        {buttonData.community_name}
      </Text>
    </View>
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
