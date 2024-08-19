import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import { Community } from "@interfaces/data/communityInterface";
import { CommunityItem } from "@components/atom";

type Props = {
  listData: Community[];
};

const CircleList = ({ listData }: Props) => {
  return (
    <View>
      <ScrollView horizontal contentContainerStyle={styles.container}>
        {listData.map((item, index) => (
          <CommunityItem key={index.toString()} itemData={item} />
        ))}
      </ScrollView>
    </View>
  );
};

export default CircleList;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 14,
    gap: 14,
    marginVertical: 14,
  },
});
