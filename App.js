import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import "react-native-gesture-handler";

import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  DashboardScreen,
  ListScreen,
  SettingsScreen,
  ComponentsScreen,
} from "./src/screens";
import Ionicons from "react-native-vector-icons/Ionicons";


const Tab = createBottomTabNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#d35400",
    second: '',
    background: "rgb(242, 242, 242)",
    card: "rgb(255, 255, 255)",
    text: "rgb(28, 28, 30)",
    border: "rgb(199, 199, 204)",
    notification: "rgb(255, 69, 58)",
  },
};

export default function App() {
  return (
    <NavigationContainer style={{ backgroundColor: "#d35400" }} theme={MyTheme}>
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
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
          backgroundColor: "pink",
        }}
      >
        <Tab.Screen name="Dashboard" component={DashboardScreen} />

        <Tab.Screen name="List" component={ListScreen} />
        <Tab.Screen
          name="Components"
          component={ComponentsScreen}
          options={{
            tabBarBadge: 2,
            tabBarBadgeStyle: { backgroundColor: "rgb(242, 242, 242)" },
          }}
        />

        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
