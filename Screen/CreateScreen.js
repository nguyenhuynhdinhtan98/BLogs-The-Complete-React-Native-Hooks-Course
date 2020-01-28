import React, { Component, useContext, useState } from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  Alert,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from "react-native";
import { Context } from "../Context/BlogContext";
const CreteScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { createBlogs } = useContext(Context);
  return (
    <View style={styles.post}>
      <TextInput
        onChangeText={text => setTitle(text)}
        style={styles.input}
        placeholder="Title"
      />
      <TextInput
        onChangeText={text => setContent(text)}
        style={styles.input}
        placeholder="Content"
      />
      <Button
        title="Create"
        style={{ padding: 10 }}
        onPress={() => {
          createBlogs(title, content, () => navigation.navigate("Index"));
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  post: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start"
  },
  input: {
    borderColor: "black",
    margin: 5,
    borderWidth: 1,
    borderRadius: 10,
    height: 35,
    padding: 10
  }
});
export default CreteScreen;
