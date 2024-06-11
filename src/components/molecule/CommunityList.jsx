import { FlatList, StyleSheet } from "react-native";
import React from "react";
import CommunityListButton from "../atom/CommunityListButton";

const CommunityList = ({ listData, fetchImage }) => {
  return (
    <FlatList
      data={listData}
      keyExtractor={(_, index) => index.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.list}
      renderItem={({ item }) => (
        <CommunityListButton fetchImage={fetchImage} buttonData={item} />
      )}
    />
  );
};

export default CommunityList;

const styles = StyleSheet.create({
  list: {
    gap: 14,
    paddingHorizontal: 14,
  },
});
