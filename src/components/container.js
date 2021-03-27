import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ScreenContainer = ({ children }) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

export default ScreenContainer;

const styles = StyleSheet.create({
  container: { flex: 1, margin: 16 },
});
