
export interface Todo {
    id: number;
    text: string;
    complete: boolean;
  }
  /** Todo Action Constants */
  export enum TodoAction {
    ADD_TODO = 'ADD_TODO',
    EDIT_TODO = 'EDIT_TODO',
    DELETE_TODO = 'DELETE_TODO',
    TOGGLE_COMPLETE = 'TOGGLE_COMPLETE',
  }
  
  interface AddTodoAction {
    type: TodoAction.ADD_TODO;
    payload: string;
  }
  
  interface EditTodoAction {
    type: TodoAction.EDIT_TODO;
    payload: { id: number; text: string };
  }
  
  interface DeleteTodoAction {
    type: TodoAction.DELETE_TODO;
    payload: number;
  }
  
  interface ToggleCompleteAction {
    type: TodoAction.TOGGLE_COMPLETE;
    payload: number;
  }
  
  export type TodoActions =
    | AddTodoAction
    | EditTodoAction
    | DeleteTodoAction
    | ToggleCompleteAction;
  
  export const initialState = {
    todos: [] as Todo[],
  };
  
  export const todoReducer = (
    state: typeof initialState,
    action: TodoActions
  ): typeof initialState => {
    switch (action.type) {
      case TodoAction.ADD_TODO:
        return {
          todos: [
            { id: Date.now(), text: action.payload, complete: false },
            ...state.todos,
          ],
        };
  
      case TodoAction.EDIT_TODO:
        return {
          todos: state.todos.map((todo: Todo) =>
            todo.id === action.payload.id
              ? { ...todo, text: action.payload.text }
              : todo
          ),
        };
  
        case TodoAction.DELETE_TODO: {
          console.log(`Deleting todo with id: ${action.payload}`);
          const updatedTodos = state.todos.filter((todo: Todo) => todo.id !== action.payload);
          console.log('Updated Todos after deletion:', updatedTodos);
          return {
            todos: updatedTodos,
          };
        }
          
  
      case TodoAction.TOGGLE_COMPLETE:
        return {
          todos: state.todos.map((todo: Todo) =>
            todo.id === action.payload
              ? { ...todo, complete: !todo.complete }
              : todo,
              console.log("payload:", action.payload)
          ),
        };
  
      default:
        return state;
    }
};
  