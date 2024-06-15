import { Image, Pressable, StyleSheet, View } from "react-native";
import React from "react";

const TabAddButton = ({ navigation }) => {
  const onHandleAdd = () => {
    const current = navigation.getState().index;

    if (current === 1) {
      navigation.navigate("CommunityRoute", {
        screen: "CommunityAdd",
      });
    } else {
      navigation.navigate("AuctionRoute", {
        screen: "AuctionAdd",
      });
    }
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={onHandleAdd}>
        <Image
          source={require("../../assets/images/plus.png")}
          style={styles.icon}
        />
      </Pressable>
    </View>
  );
};

export default TabAddButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  icon: {
    width: 34,
    height: 32,
  },
});
