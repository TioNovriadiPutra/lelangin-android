import { StyleSheet, View } from "react-native";
import React from "react";
import { Skeleton } from "@rneui/themed";

const AccountHeaderSkeleton = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Skeleton width={84} height={84} circle />

        <Skeleton width={86} height={27} style={styles.skeleton} />
      </View>

      <Skeleton width={113} height={37} style={styles.skeleton} />
    </View>
  );
};

export default AccountHeaderSkeleton;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 61,
    gap: 12,
  },
  profile: {
    gap: 6,
    alignItems: "center",
  },
  skeleton: {
    borderRadius: 20,
  },
});
