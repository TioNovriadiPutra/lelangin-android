import { StyleSheet, View } from "react-native";
import React from "react";
import AccountMenuList from "../molecule/AccountMenuList";

const AccountMenu = () => {
  return (
    <View style={styles.container}>
      <AccountMenuList />
    </View>
  );
};

export default AccountMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 51,
    marginBottom: 40,
  },
});
