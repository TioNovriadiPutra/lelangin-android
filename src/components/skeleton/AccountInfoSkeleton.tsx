import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Skeleton } from "@rneui/themed";

const AccountInfoSkeleton = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Skeleton width={84} height={84} circle />

        <Skeleton width={84} height={27} />
      </View>

      <Skeleton width={113} height={37} />
    </View>
  );
};

export default AccountInfoSkeleton;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 61,
    paddingBottom: 51,
    gap: 12,
  },
  header: {
    gap: 6,
  },
});
