import React, { useState } from "react";
import { Button, Checkbox, Flex, Box, Text, Textarea } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  resolveTodos,
  startEditTodos,
  cancelEditTodos,
  saveEditTodos,
  getTodo,
  deleteTodos,
} from "../../../store/todos";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import "./Todo.scss";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  const [description, setDescription] = useState(todo.description);
  const singleTodo = useSelector(getTodo(todo.id));

  console.log(singleTodo);

  return !singleTodo.edit ? (
    <Flex
      className={
        singleTodo.resolved ? "singleTodo completedSingleTodo" : "singleTodo"
      }
    >
      <Text
        className={
          singleTodo.resolved ? "resolvedTodoText description" : "description"
        }
      >
        {singleTodo.description}
      </Text>
      <Flex>
        <Box className="resolve">
          <Checkbox
            isChecked={singleTodo.resolved}
            onChange={() => dispatch(resolveTodos({ id: singleTodo.id }))}
          >
            {singleTodo.resolved ? "completed" : "in progress"}
          </Checkbox>
        </Box>
        <Button
          disabled={singleTodo.resolved}
          className="edit"
          colorScheme="blue"
          variant="outline"
          onClick={() => {
            dispatch(startEditTodos({ id: singleTodo.id }));
          }}
        >
          <EditIcon />
        </Button>
        <Button
          className="delete"
          colorScheme="red"
          variant="outline"
          onClick={() => {
            dispatch(deleteTodos({ id: singleTodo.id }));
          }}
        >
          <DeleteIcon />
        </Button>
      </Flex>
    </Flex>
  ) : (
    <Flex className="editTodoContainer">
      <Textarea
        className="editDescription"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Flex className="editButtons">
        <Button
          colorScheme="red"
          variant="outline"
          onClick={() => dispatch(cancelEditTodos({ id: singleTodo.id }))}
          className="cancel"
        >
          Cancel
        </Button>
        <Button
          colorScheme="blue"
          variant="outline"
          onClick={() =>
            dispatch(
              saveEditTodos({ id: singleTodo.id, description: description })
            )
          }
        >
          Save
        </Button>
      </Flex>
    </Flex>
  );
};

export default Todo;
