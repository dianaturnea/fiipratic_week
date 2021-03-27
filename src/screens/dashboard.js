import React from "react";
import { StyleSheet, FlatList, Pressable } from "react-native";
import { MyCustomText, ScreenContainer, Spacer } from "./../components";

const Dashboard = ({ navigation }) => {
  const myCustomArray = [
    {
      id: 1,
      itemDescription: "item1",
      navigationRoute: "Exemple1",
    },
    {
      id: 2,
      itemDescription: "item2",
      navigationRoute: "Exemple2",
    },
    {
      id: 3,
      itemDescription: "item4",
      navigationRoute: "Exemple3",
    },
    {
      id: 4,
      itemDescription: "item4",
      navigationRoute: "",
    },
    {
      id: 5,
      itemDescription: "item5",
      navigationRoute: "",
    },
  ];
  const renderItemFunction = ({ item }) => (
    <Pressable onPress={() => navigation.navigate(item.navigationRoute)}>
      <MyCustomText type="h4">
        {item.id} - {item.itemDescription}
      </MyCustomText>
    </Pressable>
  );
  return (
    <ScreenContainer>
      <MyCustomText type="h1">Dashboard Screen</MyCustomText>
      <Spacer />
      <MyCustomText type="h4">{myCustomArray[0].itemDescription}</MyCustomText>
      <MyCustomText type="h4">{myCustomArray[1].itemDescription}</MyCustomText>
      <MyCustomText type="h4">{myCustomArray[2].itemDescription}</MyCustomText>
      <MyCustomText type="h4">{myCustomArray[3].itemDescription}</MyCustomText>
      <Spacer />
      {myCustomArray.map((item) => (
        <MyCustomText type="h4">
          {item.id} - {item.itemDescription}
        </MyCustomText>
      ))}
      <Spacer />
      <FlatList
        // horizontal={true}
        style={{ flex: 1, backgroundColor: "pink" }}
        data={myCustomArray}
        renderItem={renderItemFunction}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => (
          <MyCustomText type="h2">ListHeader</MyCustomText>
        )}
      />
    </ScreenContainer>
  );
};

export default Dashboard;

const styles = StyleSheet.create({});
