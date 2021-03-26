import React from "react";
import { StyleSheet } from "react-native";
import { MyCustomText, ScreenContainer, Spacer } from "./../components";

const ComponentsScreen = () => {
  return (
    <ScreenContainer>
      <MyCustomText type="h1">Components Screen</MyCustomText>
     <Spacer/>
      <MyCustomText type="h1">Type H1: Lorem Ipsum</MyCustomText>
      <MyCustomText type="h2">Type H2: Lorem Ipsum</MyCustomText>
      <MyCustomText type="h3">Type H3: Lorem Ipsum</MyCustomText>
      <MyCustomText type="h4">Type H4: Lorem Ipsum</MyCustomText>

      <Spacer />
      <MyCustomText type="p">
        Type - Paragraph{"\n"}
        {"\n"} Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.{"\n"}
        {"\n"}
        {"\n"} It was popularised in the 1960s with the release of Letraset
        sheets containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem
        Ipsum.
      </MyCustomText>
      <Spacer />
      <MyCustomText type="p">
        Apply the Spacer component between this line
      </MyCustomText>
      <Spacer />
      <MyCustomText type="p">...and this one</MyCustomText>
    </ScreenContainer>
  );
};

export default ComponentsScreen;

const styles = StyleSheet.create({});
