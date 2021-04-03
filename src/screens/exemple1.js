import React, { useState } from "react";
import { StyleSheet, Pressable, View, Dimensions } from "react-native";
import {
  ScreenContainer,
  MyCustomText,
  Spacer,
  MyCustomInput,
} from "./../components";
import { setItem } from "../../services/list";

const exemple1 = () => {
  const [textValue, setTextValue] = useState("Initial value from state");
  const [imgValue, setImgValue] = useState("");
  const [navigationRoute, setNavigationRoute] = useState("");
  const [apiResponse, setApiResponse] = useState("");

  const saveItem = () => {
    const item = {
      id: Math.random(),
      item: textValue,
      img: imgValue,
      navigationRoute: navigationRoute || 'Exemple2',
    };
    const response = setItem(item);
  };

  return (
    <ScreenContainer>
      <MyCustomText type="h1">Add item</MyCustomText>
      <MyCustomInput
        style={styles.input}
        onChangeText={setTextValue}
        value={textValue}
      />
      <MyCustomInput
        placeholder="Image Path"
        style={styles.input}
        onChangeText={setImgValue}
        value={imgValue}
      />
      <MyCustomInput
        placeholder="Navigation Route"
        style={styles.input}
        onChangeText={setNavigationRoute}
        value={navigationRoute}
      />
      <Spacer />
      <View style={styles.box}>
        <MyCustomText type="h3">Form Fields Value</MyCustomText>
        <MyCustomText type="p">Title value: {textValue}</MyCustomText>
        <MyCustomText type="p">
          Navigation Route: {navigationRoute}
        </MyCustomText>
        <MyCustomText type="p">Image Path: {imgValue}</MyCustomText>
      </View>
      <Spacer/>
      <Pressable onPress={() => saveItem()} style={styles.button}>
        <MyCustomText type="p"> Save Item </MyCustomText>
      </Pressable>
      <Spacer />
      <MyCustomText type="h3">{apiResponse}</MyCustomText>
    </ScreenContainer>
  );
};

export default exemple1;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  button: {
    backgroundColor: "#9b59b6",
    height: 30,
    width: Dimensions.get("screen").width - 24,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    padding: 16,
    justifyContent: "flex-start",
  },
});
