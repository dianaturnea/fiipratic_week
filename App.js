import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";

import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  DashboardScreen,
  ListScreen,
  SettingsScreen,
  ComponentsScreen,
  Exemple1,
  Exemple2,
  Exemple3,
} from "./src/screens";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#1abc9c",
    secondary: "#2c3e50",
    whiteClouds: "#ecf0f1",
    silver: "#bdc3c7",
    background: "rgb(242, 242, 242)",
    card: "#8e44ad",
    text: "rgb(28, 28, 30)",
    border: "rgb(199, 199, 204)",
    notification: "rgb(255, 69, 58)",
  },
};

export default function App() {
  return (
    <NavigationContainer
      style={{ backgroundColor: MyTheme.colors.secondary }}
      theme={MyTheme}
    >
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            switch (route.name) {
              case "Settings":
                iconName = "settings-outline";
                break;
              case "List":
                iconName = "planet-outline";
                break;
              case "Components":
                iconName = "bookmarks-outline";
                break;
              default:
                iconName = "home-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: MyTheme.colors.whiteClouds,
          inactiveTintColor: MyTheme.colors.silver,
          backgroundColor: MyTheme.colors.whiteClouds,
        }}
      >
        <Tab.Screen name="Dashboard" component={DashboardScreen} />

        <Tab.Screen name="List" component={ListScreen} />
        <Tab.Screen
          name="Components"
          component={ComponentsScreen}
          options={{
            tabBarBadge: 20,
            tabBarBadgeStyle: { backgroundColor: DefaultTheme.colors.card },
          }}
        />

        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Exemple1" component={Exemple1} />
        <Tab.Screen name="Exemple2" component={Exemple2} />
        <Tab.Screen name="Exemple3" component={Exemple3} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
