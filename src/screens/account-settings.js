import React from "react";
import { StyleSheet, Button } from "react-native";
import { ScreenContainer, MyCustomText } from "./../components";

const AccountSettings = ({navigation}) => {
  return (
    <ScreenContainer>
      <MyCustomText type="h1">Home Settings Screen</MyCustomText>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </ScreenContainer>
  );
};

export default AccountSettings;

const styles = StyleSheet.create({});
