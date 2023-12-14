import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import TodoList from "../components/TodoList";
import { initialState } from "../reducers/todoReducers";
import { expect } from "vitest";

describe('TodoList Component', () => {
    it('render TodoItem and TodoInput Components on the screen', () => {
        render(<TodoList/>);

        const todoInputElement = screen.getByTestId('todo-input');
        expect(todoInputElement).toBeTruthy();
        const todoItems = screen.queryAllByTestId('todo-item');
        expect(todoItems).toHaveLength(0);
        // screen.debug();
    });

    it('should return the initial state', () => {
        expect(initialState).toEqual({ todos: []});
    });

    it('should update state before and after adding a new todo', async () => {
        render(<TodoList />);
    
        // Check if the initial state renders correctly (empty todo list)
        expect(screen.queryAllByTestId('todo-item')).toHaveLength(0);
    
        // Add a new todo
        const inputElement = screen.getByTestId('todo-input');
        const addButton = screen.getByTestId('add-todo-button');
    
        fireEvent.change(inputElement, { target: { value: 'Added a new todo item' } });
        fireEvent.click(addButton);
    
        await waitFor(() => {
          // Check if the state updates after adding a new todo
          const todoItems = screen.queryAllByTestId('todo-item');
          expect(todoItems).toHaveLength(1);
    
          // Check for new added todo
          const todoItem = screen.queryAllByTestId('todo-item')[0];
          expect(todoItem.textContent).toEqual('Added a new todo item');
      });
    })
        
});