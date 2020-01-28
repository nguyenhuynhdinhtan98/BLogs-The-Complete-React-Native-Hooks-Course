import React, { Component, useContext, useState, useEffect } from "react";
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
import { EvilIcons } from "@expo/vector-icons";
const IndexScreen = ({ navigation }) => {
  const { state, editBlogs } = useContext(Context);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  var showScreen = state.find(item => item.id === navigation.getParam("id"));
  useEffect(() => {
    setTitle(showScreen.title);
    setContent(showScreen.content);
  }, []);
  return (
    <View style={styles.post}>
      <TextInput
        onChangeText={text => setTitle(text)}
        style={styles.input}
        placeholder="Title"
        value={title}
      />
      <TextInput
        onChangeText={text => setContent(text)}
        style={styles.input}
        placeholder="Content"
        value={content}
      />
      <Button
        title="Edit"
        onPress={() =>
          editBlogs(navigation.getParam("id"), title, content, () =>
            navigation.navigate("Index")
          )
        }
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
    height: 40,
    padding: 10
  }
});
export default IndexScreen;
