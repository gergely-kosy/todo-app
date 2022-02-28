import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  getUnresolvedTodos,
  getResolvedTodos,
  getTodos,
} from "../../store/todos";
import { Flex, Button, Box } from "@chakra-ui/react";
import TodoList from "../../components/TodoList";

const Items = () => {
  const allTodos = useSelector(getTodos);
  const resolvedTodos = useSelector(getResolvedTodos);
  const unresolvedTodos = useSelector(getUnresolvedTodos);

  const [todos, setTodos] = useState(allTodos);

  return (
    <Box>
      <Flex>
        <Button onClick={() => setTodos(allTodos)}>All todos</Button>
        <Button onClick={() => setTodos(resolvedTodos)}>Resolved todos</Button>
        <Button onClick={() => setTodos(unresolvedTodos)}>
          Unresolved todos
        </Button>
      </Flex>
      <TodoList todos={todos} />
    </Box>
  );
};
export default Items;
