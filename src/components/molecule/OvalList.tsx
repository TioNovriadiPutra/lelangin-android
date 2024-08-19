import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import { Category } from "@interfaces/data/categoryInterface";
import { OvalButton } from "@components/atom";
import { useRecoilState } from "recoil";
import { currentCategoryState } from "@store/pageState";

type Props = {
  listData: Category[];
};

const OvalList = ({ listData }: Props) => {
  const [current, setCurrent] = useRecoilState(currentCategoryState);

  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.list}>
        <OvalButton
          label="All"
          active={current === 0}
          onPress={() => setCurrent(0)}
        />

        {listData.map((item, index) => (
          <OvalButton
            key={index.toString()}
            label={item.categoryName}
            active={current === item.id}
            onPress={() => setCurrent(item.id)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default OvalList;

const styles = StyleSheet.create({
  container: {
    marginBottom: 14,
  },
  list: {
    paddingHorizontal: 14,
    gap: 12,
  },
});
