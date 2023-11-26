import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputBase,
  InputLabel,
} from "@mui/material";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
const AddTodo = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const handleNoteAdder = (e) => {
    e.preventDefault();
    if (text !== "") {
      dispatch(addTodo(text));    
      console.log("Added to the Store");
    }
    setText(""); // cleaning input dashboard
  };

  return (
    <Box
      alignContent="center"
      sx={{
        display: "flex",
        gap: "space-between",
        height: "20%",
        width: "40%",
      }}
      margin="10px auto"
      display="flex"
      gap="5px"
      borderRadius="10px"
      padding="2%"
    >
      <form onSubmit={handleNoteAdder}>
        <InputLabel>Todo....</InputLabel>
        <Input
          placeholder="Enter Todo"
          sx={{
            border: "solid",
            borderRadius: "4px",
            width: "150%",
            padding: "3px",
          }}
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <br />
        <FormHelperText i="my-helper-text">{Date()}</FormHelperText>
        <br />
        <Button variant="contained" onClick={handleNoteAdder}>
          Add
        </Button>
      </form>
    </Box>
  );
};

export default AddTodo;
