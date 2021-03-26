import React from "react";
import { StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { HomeSettingsScreen, AccountSettingsScreen} from ".."

const Drawer = createDrawerNavigator();


const Settings = () => {
  return (
    <Drawer.Navigator initialRouteName="HomeSettingsScreen">
      <Drawer.Screen
        name="Settings"
        component={HomeSettingsScreen}
      />
      <Drawer.Screen
        name="Account Settings"
        component={AccountSettingsScreen}
      />
    </Drawer.Navigator>
  );
};

export default Settings;

const styles = StyleSheet.create({});
