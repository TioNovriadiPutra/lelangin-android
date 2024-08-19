import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { fonts } from "@themes/fonts";
import { colors } from "@themes/colors";
import { useNavigation } from "@react-navigation/native";
import { AuthStackProps } from "@interfaces/navigationType";

const FormFooter = () => {
  const nav = useNavigation<AuthStackProps>();

  const onHandleNav = () => {
    nav.navigate("Register");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>Doesn't have an account?</Text>

      <TouchableOpacity onPress={onHandleNav}>
        <Text style={styles.label}>Register here</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FormFooter;

const styles = StyleSheet.create({
  container: {
    marginTop: 54,
    marginBottom: 38,
    alignItems: "center",
    gap: 4,
  },
  question: {
    fontFamily: fonts.Regular,
    fontSize: 16,
    color: colors.Grey,
    textAlign: "center",
  },
  label: {
    fontFamily: fonts.SemiBold,
    fontSize: 16,
    color: colors.Accent,
    textAlign: "center",
  },
});
