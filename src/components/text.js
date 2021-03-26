import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { DefaultTheme } from "@react-navigation/native";


const MyCustomText = ({ type , children}) => {
  return (
    <View>{type !== "" && <Text style={styles[type]}>{children}</Text>}</View>
  );
};

export default MyCustomText;

const styles = StyleSheet.create({
  h1: {
    fontSize: 24,
    color: DefaultTheme.primary,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 0,
    marginRight: 0,
    fontWeight: "bold",
  },
  h2: {
    fontSize: 18,
    color: DefaultTheme.primary,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 0,
    marginRight: 0,
    fontWeight: "bold",
  },
  h3: {
    fontSize: 16,
    color: DefaultTheme.primary,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 0,
    marginRight: 0,
    fontWeight: "bold",
  },
  h4: {
    fontSize: 14,
    color: DefaultTheme.primary,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 0,
    marginRight: 0,
    fontWeight: "bold",
  },
  p: {
    fontSize: 12,
    color: DefaultTheme.primary,
    marginRight: 0,
    marginLeft: 0,
    marginRight: 0,
  },
});
