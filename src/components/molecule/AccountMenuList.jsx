import { FlatList, StyleSheet } from "react-native";
import React from "react";
import { accountMenuList } from "../../utils/constant/page";
import AccountMenuButton from "../atom/AccountMenuButton";
import useAccountMenu from "../../hooks/useAccountMenu";

const AccountMenuList = () => {
  const { onHandleNav, onHandleLogout } = useAccountMenu();

  return (
    <FlatList
      data={accountMenuList}
      keyExtractor={(_, index) => index.toString()}
      contentContainerStyle={styles.list}
      renderItem={({ item, index }) => (
        <AccountMenuButton
          menuData={item}
          index={index}
          onPress={
            item.destination
              ? () => onHandleNav(item.destination)
              : onHandleLogout
          }
        />
      )}
    />
  );
};

export default AccountMenuList;

const styles = StyleSheet.create({
  list: {
    paddingBottom: 40,
  },
});
