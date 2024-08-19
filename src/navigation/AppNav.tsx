import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthRoute from "@routes/AuthRoute";
import { linking } from "@configs/linking";
import useStarter from "@hooks/useStarter";
import { DateModal, DropdownModal, LoadingModal } from "@components/organism";
import { CustomToast } from "@components/molecule";
import AppRoute from "@routes/AppRoute";
import { StatusBar } from "expo-status-bar";
import { colors } from "@themes/colors";

const AppNav = () => {
  const { auth, fontsLoaded } = useStarter();

  if (!fontsLoaded) return null;

  return (
    <View style={styles.container}>
      <StatusBar translucent={false} backgroundColor={colors.White} />
      <LoadingModal />
      <DropdownModal />
      <DateModal />

      <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
        {auth.token ? <AppRoute /> : <AuthRoute />}
      </NavigationContainer>

      <CustomToast />
    </View>
  );
};

export default AppNav;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
