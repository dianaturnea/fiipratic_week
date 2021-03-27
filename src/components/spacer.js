import React from "react";
import { StyleSheet, View } from "react-native";

const Spacer = () => {
  return <View style={styles.spacer}></View>;
};

export default Spacer;

const styles = StyleSheet.create({
  spacer: {
    height: 30,
  },
});
