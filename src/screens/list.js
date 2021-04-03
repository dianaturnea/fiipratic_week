import React, { useState } from "react";
import { StyleSheet, Pressable } from "react-native";
import { ScreenContainer, MyCustomText, Spacer } from "./../components";

const List = () => {
  const [counter, setCounter] = useState(0);
  console.log(counter);
  return (
    <ScreenContainer>
      <MyCustomText type="h1">List Screen</MyCustomText>
      <Spacer />
      <MyCustomText type="p">Couter {counter}</MyCustomText>
      <Pressable onPress={() => setCounter(counter + 1)}>
        <MyCustomText type="h3">+</MyCustomText>
      </Pressable>
      <Pressable onPress={() => setCounter(counter - 1)}>
        <MyCustomText type="h3">-</MyCustomText>
      </Pressable>
    </ScreenContainer>
  );
};

export default List;

const styles = StyleSheet.create({});
