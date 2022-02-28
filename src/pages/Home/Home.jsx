import React, { useState } from "react";
import {
  InputGroup,
  InputRightElement,
  Button,
  Flex,
  Box,
  Input,
  Text,
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { setInitialStateUser } from "../../store/users";
import { addTodos, setInitialStateTodo } from "../../store/todos";

import TodoList from "../../components/TodoList";
import TodoForm from "../../components/TodoForm/TodoForm";
import "./Home.scss";

const Home = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const [description, setDescription] = useState("");

  const handleCreateTodo = () => {
    dispatch(addTodos({ description: description }));
    setDescription("");
  };

  const clearStorage = () => {
    dispatch(setInitialStateTodo());
    dispatch(setInitialStateUser());
  };

  return (
    <Flex className="homeContainer">
      <Text className="homeTitle">Todo App</Text>
      {state.users.length === 0 ? (
        <TodoForm />
      ) : (
        <Box className="todosContainer">
          <Flex className="addTodoContainer">
            <Text className="userNameText">Welcome {state.users[0].name}</Text>
            <Text className="todoTitle">What's the plan for Today?</Text>
            <InputGroup size="md">
              <Input
                borderColor="grey"
                placeholder="Enter what to do"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <InputRightElement width="7rem">
                <Button
                  colorScheme="blue"
                  variant="solid"
                  id="addTodoButton"
                  onClick={handleCreateTodo}
                >
                  Add Todo
                </Button>
              </InputRightElement>
            </InputGroup>
          </Flex>
          <Box className="todoListContainer">
            <TodoList todos={state.todos} />
          </Box>
          <Button
            onClick={() => clearStorage()}
            className="clearStorage"
            colorScheme="blue"
            variant="solid"
          >
            Clear Storage
          </Button>
        </Box>
      )}
    </Flex>
  );
};

export default Home;
