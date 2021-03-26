import React from "react";
import { StyleSheet, Button } from "react-native";
import { ScreenContainer, MyCustomText, Spacer } from "./../components";

const HomeSettings = ({ navigation }) => {
  return (
    <ScreenContainer>
      <MyCustomText type="h1">Home Settings Screen</MyCustomText>
      <Spacer />
      <Button
        onPress={() => {
          navigation.openDrawer();
        }}
        title="Open a Drawer"
      ></Button>
    </ScreenContainer>
  );
};

export default HomeSettings;

const styles = StyleSheet.create({});
