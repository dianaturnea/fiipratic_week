import React from "react";
import { StyleSheet } from "react-native";
import { MyCustomText, ScreenContainer} from './../components'


const Dashboard = () => {
  return (
    <ScreenContainer>
      <MyCustomText type="h1">Dashboard Screen</MyCustomText>
    </ScreenContainer>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
});
