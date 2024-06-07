import { FlatList, StyleSheet } from "react-native";
import React from "react";
import DropdownItem from "../atom/DropdownItem";

const DropdownList = ({ dropdownData, onClose }) => {
  return (
    <FlatList
      data={dropdownData.items}
      keyExtractor={(_, index) => index.toString()}
      contentContainerStyle={styles.list}
      renderItem={({ item }) => (
        <DropdownItem
          itemData={item}
          active={
            dropdownData.current === null
              ? false
              : dropdownData.current.label === item.label
              ? true
              : false
          }
          onPick={() => {
            dropdownData.onPick(item);
            onClose();
          }}
        />
      )}
    />
  );
};

export default DropdownList;

const styles = StyleSheet.create({
  list: {
    gap: 14,
  },
});
