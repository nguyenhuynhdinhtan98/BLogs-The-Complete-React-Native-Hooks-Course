import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Provider } from "./Context/BlogContext";
import IndexScreen from "./Screen/IndexScreen";
import CreateScreen from "./Screen/CreateScreen";
import EditScreen from "./Screen/EditScreen";
import ShowScreen from "./Screen/ShowScreen";
const MainNavigator = createStackNavigator(
  {
    Index: IndexScreen,
    Show: ShowScreen,
    Edit: EditScreen,
    Create: CreateScreen
  },
  {
    initialRouteName: "Index",
    defaultNavigationOptions: { title: "Blogs" }
  }
);

const App = createAppContainer(MainNavigator);

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
