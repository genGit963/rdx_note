import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos:[
        {
            id: nanoid(),
            text: "Hellow World !. I m learning Redux-React"
        }
    ]
}

export const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo: (state, action) =>{
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },

        removeTodo: (state, action) =>{
            state.todos = state.todos.filter((todo) =>
            todo.id !== action.payload )
        },

        updateTodo: (state, action) =>{
            updatingState = state.todos.filter((todo)=>
            todo.id == action.payload[0])
            updatingState.text = action.payload[1]
        }
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer