import { Typography } from "@mui/material";
import "./App.css";
import AddTodo from "./components/addTodo.jsx";
import Todo from "./components/todo.jsx";

function App() {
  return (
    <>
      <Typography variant="h3" align="center">
        Learning about Redux
      </Typography>
      <AddTodo />
      <Todo />
    </>
  );
}

export default App;
