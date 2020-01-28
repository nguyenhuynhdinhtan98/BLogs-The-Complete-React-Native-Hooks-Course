import React, { useState, useReducer } from "react";
import createDataContext from "./createDataContext";
const blogReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          id: String(state.length + 1),
          title: action.title,
          content: action.content
        }
      ];
    case "delete":
      return state.map(value => value.id !== action.playload);
    case "update":
      const newData = {
        id: action.id,
        title: action.title,
        content: action.content
      };
      return state.map(value => {
        if (value.id === action.id) {
          return newData;
        } else {
          return state;
        }
      });
    default:
      return state;
  }
};
const addBlogs = setState => {
  return () => {
    setState({ type: "add" });
  };
};

const deleteBlogs = setState => {
  return id => {
    setState({ type: "delete", playload: id });
  };
};

const createBlogs = setState => {
  return (title, content, callback) => {
    setState({ type: "add", title: title, content: content });
    callback();
  };
};

const editBlogs = setState => {
  return (id, title, content, callback) => {
    setState({ type: "update", id: id, title: title, content: content });
    callback();
  };
};
export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogs, deleteBlogs, createBlogs, editBlogs },
  []
);
