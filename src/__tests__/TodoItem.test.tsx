import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import TodoItem from '../components/TodoItem';

// Mock dispatch function
const mockDispatch = vi.fn();

const sampleTodo = {
  id: 1,
  text: 'Sample Todo',
  complete: false,
};

describe('TodoItem', () => {
  beforeEach(() => {
    // Reset mockDispatch before each test
    mockDispatch.mockClear();
  });

  it('renders todo item correctly', () => {
    render(<TodoItem todo={sampleTodo} dispatch={mockDispatch} />);
    const todoItem = screen.getByTestId('todo-item');
    expect(todoItem).toBeInTheDocument();
    expect(todoItem).toHaveTextContent(sampleTodo.text);
  });

  it('allows editing todo item', () => {
    render(<TodoItem todo={sampleTodo} dispatch={mockDispatch} />);

    fireEvent.click(screen.getByText('Edit'));

    const editInput = screen.getByTestId('edit-input');
    expect(editInput).toBeTruthy();
    expect(editInput).toHaveValue(sampleTodo.text);

    const newText = 'Updated Todo';
    fireEvent.change(editInput, { target: { value: newText } });

    fireEvent.click(screen.getByText('Save'));

    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'EDIT_TODO',
      payload: { id: sampleTodo.id, text: newText },
    });
  });


    /* 
    * Test Case: allows deleting todo item
    * Renders the TodoItem component with a sampleTodo.
    * Logs the sampleTodo information before and after clicking the delete button.
    * Ensures that the DELETE_TODO action is dispatched with the correct payload.
    * The first console.log statement, 'Before clicking delete:', 
    * will log the sampleTodo object before clicking the delete button. 
    * The output might look like: Before clicking delete: { id: 1, text: 'Sample Todo', complete: false }
    * Inside the waitFor block, the second console.log statement, 
    * 'After clicking delete:', will log the sampleTodo object again. 
    * However, keep in mind that "sampleTodo" is not expected to change within this block because 
    * it's a "LOCAL VARIABLE!!!!!" within the TodoItem component. 
    * Therefore, it will still log the same sampleTodo as before clicking the delete button:
    * After clicking delete: { id: 1, text: 'Sample Todo', complete: false }
  */
  it('allows deleting todo item', () => {
    // Render the TodoItem component with sampleTodo
    render(<TodoItem todo={sampleTodo} dispatch={mockDispatch} />);
    
    // Log sampleTodo information before clicking delete
    console.log('Before clicking delete:', sampleTodo);

    // Find and click the delete button
    const deleteButton = screen.getByTestId('delete-todo-button');
    fireEvent.click(deleteButton);

    // Since the delete action is asynchronous, use waitFor to ensure it's called
    waitFor(() => {
      // Log sampleTodo information after clicking delete
      console.log('After clicking delete:', sampleTodo);

      // Assert that the DELETE_TODO action is dispatched with the correct payload
      expect(mockDispatch).toHaveBeenCalledWith({
        type: 'DELETE_TODO',
        payload: sampleTodo.id,
      });
    });
  });


  it('allows toggling completion status', () => {
    render(<TodoItem todo={sampleTodo} dispatch={mockDispatch} />);

    fireEvent.click(screen.getByTestId('toggle-todo'));

    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'TOGGLE_COMPLETE',
      payload: sampleTodo.id,
    });
  });
});

