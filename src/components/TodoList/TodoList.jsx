import React from "react";
import { Flex } from "@chakra-ui/react";
import Todo from "./Todo";
import "./TodoList.scss";

const TodoList = ({ todos }) => {
  return todos.map((todo) => (
    <Flex key={todo.id}>
      <Todo todo={todo} />
    </Flex>
  ));
};

export default TodoList;
