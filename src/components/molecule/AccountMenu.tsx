import { ScrollView, StyleSheet } from "react-native";
import React from "react";
import { accountMenu } from "@constants/page";
import { AccountMenuItem } from "@components/atom";

const AccountMenu = () => {
  return (
    <ScrollView>
      {accountMenu.map((item, index) => (
        <AccountMenuItem
          key={index.toString()}
          menuData={item}
          top={index === 0}
        />
      ))}
    </ScrollView>
  );
};

export default AccountMenu;

const styles = StyleSheet.create({});
