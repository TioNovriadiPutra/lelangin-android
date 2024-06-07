import { StyleSheet, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthRoute from "./AuthRoute";
import { linking } from "../utils/config/linking";
import useStarter from "../hooks/useStarter";
import ErrorPage from "../pages/ErrorPage";
import useResponsive from "../hooks/useResponsive";
import DropdownModal from "../components/organism/DropdownModal";
import DatePickerModal from "../components/organism/DatePickerModal";
import ToastNotification from "../components/molecule/ToastNotification";
import LoadingModal from "../components/organism/LoadingModal";
import AppRoute from "./AppRoute";
import ConfirmationModal from "../components/organism/ConfirmationModal";

const AppNav = () => {
  const { isLoggedIn, fontsLoaded } = useStarter();
  const { isMobileDevice } = useResponsive();

  if (!fontsLoaded) return null;

  return (
    <View style={styles.container}>
      <LoadingModal />
      <DropdownModal />
      <DatePickerModal />
      <ConfirmationModal />

      {isMobileDevice ? (
        <NavigationContainer linking={linking}>
          {isLoggedIn ? <AppRoute /> : <AuthRoute />}
        </NavigationContainer>
      ) : (
        <ErrorPage />
      )}

      <ToastNotification />
    </View>
  );
};

export default AppNav;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
