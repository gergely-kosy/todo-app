import React, { useState } from "react";
import {
  InputGroup,
  InputRightElement,
  Button,
  Input,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { addUsers } from "../../store/users";
import "./TodoForm.scss";

const TodoForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleName = (e) => {
    e.preventDefault();
    dispatch(addUsers({ name: name }));
    setName("");
  };

  return (
    <form onSubmit={handleName}>
      <FormControl isRequired>
        <FormLabel htmlFor="first-name">Name</FormLabel>
        <InputGroup size="md">
          <Input
            value={name}
            id="first-name"
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
          />
          <InputRightElement width="7rem">
            <Button
              id="enterName"
              colorScheme="blue"
              variant="solid"
              disabled={name.length > 0 ? false : true}
              type="submit"
            >
              Enter
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
    </form>
  );
};

export default TodoForm;
