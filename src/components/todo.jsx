import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";
import { Box, Button, Card, Container, Typography } from "@mui/material";

const Todo = () => {
  const [update, setUpdate] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <div>
      <Box>
        <Container>
          {todos.map((todo) => (
            <Card
              variant=""
              sx={{
                width: "60%",
                display: "flex",
                justifyContent: "space-between",
                padding: "2%",
              }}
              key={todo.id}
            >
              {/* ------------ All Todo ------------ */}
              <Typography>{todo.text}</Typography>

              {/* ------------ Remove ------------ */}
              <Button
                variant="contained"
                size="small"
                onClick={() => dispatch(removeTodo(todo.id))}
              >
                Del
              </Button>

              {/* ------------ Update ------------ */}
              <form onSubmit={handleUpdate}>
                
              </form>
            </Card>
          ))}
        </Container>
      </Box>
    </div>
  );
};

export default Todo;
