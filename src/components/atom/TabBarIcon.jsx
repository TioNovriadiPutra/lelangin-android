import { Image, StyleSheet } from "react-native";
import React from "react";

const TabBarIcon = ({ focused, name }) => {
  if (name === "Home") {
    return (
      <Image
        source={
          focused
            ? require("../../assets/images/homeActive.png")
            : require("../../assets/images/homeInactive.png")
        }
        style={styles.icon}
      />
    );
  } else if (name === "Account") {
    return (
      <Image
        source={
          focused
            ? require("../../assets/images/accountActive.png")
            : require("../../assets/images/accountInactive.png")
        }
        style={styles.icon}
      />
    );
  } else if (name === "Community") {
    return (
      <Image
        source={
          focused
            ? require("../../assets/images/communityActive.png")
            : require("../../assets/images/communityInactive.png")
        }
        style={styles.icon}
      />
    );
  } else if (name === "Auction") {
    return (
      <Image
        source={
          focused
            ? require("../../assets/images/auctionActive.png")
            : require("../../assets/images/auctionInactive.png")
        }
        style={styles.icon}
      />
    );
  }
};

export default TabBarIcon;

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});
