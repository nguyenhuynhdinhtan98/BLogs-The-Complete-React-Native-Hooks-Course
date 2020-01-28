import React, { Component, useContext } from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  Alert,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { Context } from "../Context/BlogContext";
import { FontAwesome } from "@expo/vector-icons";
import { Constants } from "expo";
const IndexScreen = ({ navigation }) => {
  const { state, deleteBlogs } = useContext(Context);
  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          return (
            <View style={styles.post}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Show", { id: item.id })}
              >
                <Text>{item.id}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deleteBlogs(item.id)}>
                <FontAwesome name="remove" size={32} />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() => navigation.navigate("Create")}
        style={styles.iconHeader}
      >
        <FontAwesome name="plus" size={32} />
      </TouchableOpacity>
    ),
    title: "Home",
    headerStyle: {
      backgroundColor: "#f4511e"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };
};
const styles = StyleSheet.create({
  post: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: "gray",
    height: 35
  },
  title: {
    fontSize: 18,
    color: "#000070"
  },
  icon: {
    fontSize: 20
  },
  iconHeader: {
    marginRight: 5
  }
});
export default IndexScreen;
