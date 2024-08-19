import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import useAuctionController from "@controllers/auctionController";

type Props = {
  nav: any;
};

const TabAddButton = ({ nav }: Props) => {
  const { getAuctionDropdownService } = useAuctionController();

  const onHandleNav = () => {
    const current =
      nav.getState().routes[0].state.routes[
        nav.getState().routes[0].state.index
      ];
    const currentStart = nav.getState().routes[0].state.routes[0].name;

    if (current) {
      if (current.name === "Community") {
        nav.navigate("CommunityAdd");
      } else {
        getAuctionDropdownService();
      }
    } else {
      if (currentStart === "Community") {
        nav.navigate("CommunityAdd");
      } else {
        getAuctionDropdownService();
      }
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onHandleNav}>
        <Image source={require("@assets/images/add.png")} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

export default TabAddButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 34,
    height: 32,
  },
});
