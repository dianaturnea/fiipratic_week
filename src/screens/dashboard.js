import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  FlatList,
  Pressable,
  ActivityIndicator,
  View,
  Image,
} from "react-native";
import { MyCustomText, ScreenContainer, Spacer } from "./../components";
import { deteleItem, getList } from "../../services/list";
import Ionicons from "react-native-vector-icons/Ionicons";

const Dashboard = ({ navigation }) => {
  // const myCustomArray = [
  //   {
  //     id: 1,
  //     itemDescription: "item1",
  //     navigationRoute: "Exemple1",
  //   },
  //   {
  //     id: 2,
  //     itemDescription: "item2",
  //     navigationRoute: "Exemple2",
  //   },
  //   {
  //     id: 3,
  //     itemDescription: "item4",
  //     navigationRoute: "Exemple3",
  //   },
  //   {
  //     id: 4,
  //     itemDescription: "item4",
  //     navigationRoute: "",
  //   },
  //   {
  //     id: 5,
  //     itemDescription: "item5",
  //     navigationRoute: "",
  //   },
  // ];
  const [myDbList, setMyBdList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [needRefresh, setNeedRefresh] = useState(0);
  useEffect(() => {
    setIsLoading(true);
    getList().then((items) => {
      setMyBdList(items);
      setIsLoading(false);
    });
  }, [needRefresh]);

  const deleteItem = (itemId) => {
    deteleItem(itemId);
    setNeedRefresh(value => value + 1 );
  }
  const renderItemFunction = ({ item }) => (
    <View
      style={{
        padding: 16,
        flexDirection: "row",
        flex: 1,
        justifyContent: "flex-start",
        backgroundColor: "#ecf0f1",
        borderBottomColor: "#9b59b6",
        borderBottomWidth: 1,
      }}
    >
      <Image
        style={styles.tinyLogo}
        source={{
          uri: item.img
            ? item.img
            : "https://reactnative.dev/img/tiny_logo.png",
        }}
      />
      <View
        style={{
          flex: 1,
          justifyContent: "flex-start",
          flexDirection: "column",
        }}
      >
        <MyCustomText type="h4">
          Id: {item.id}
        </MyCustomText>
        <MyCustomText type="h4">
           Title: {item.item}
        </MyCustomText>
      </View>

      <View
        style={{ flex: 1, justifyContent: "flex-end", flexDirection: "row" }}
      >
        <Pressable
          style={styles.buttonArea}
          onPress={() => navigation.navigate(item.navigationRoute)}
        >
          <Ionicons name="arrow-redo-outline" color="#8e44ad" size={24} />
        </Pressable>
        <Pressable
          style={styles.buttonArea}
          onPress={() => navigation.navigate(item.navigationRoute)}
        >
          <Ionicons name="pencil-outline" color="#8e44ad" size={24} />
        </Pressable>
        <Pressable style={styles.buttonArea} onPress={()=> deleteItem(item.id)}>
          <Ionicons name="trash-outline" color="#8e44ad" size={24} />
        </Pressable>
      </View>
    </View>
  );
  return (
    <ScreenContainer>
      {/* <MyCustomText type="h1">Dashboard Screen</MyCustomText>
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
      ))} */}
      <Spacer />
      {isLoading ? (
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}><ActivityIndicator size="large"/></View>
      
      ) : (
        <FlatList
          style={{ flex: 1 }}
          data={myDbList}
          renderItem={renderItemFunction}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={() => (
            <MyCustomText type="h2">List Header</MyCustomText>
          )}
        />
      )}
    </ScreenContainer>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  tinyLogo: {
    width: 50,
    height: 50,
    marginRight: 12,
    borderRadius: 8,
  },
  buttonArea:{
    padding: 8
  }
});
