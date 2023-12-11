import React, { useReducer } from 'react';
import { 
  ChakraProvider, 
  CSSReset, 
  Box, 
  Heading,
  VStack,
} from '@chakra-ui/react';
// import TodoItem from './TodoItem';
// import TodoInput from './TodoInput';
// import { todoReducer, initialState, TodoAction } from '../reducers/todoReducers';

const TodoList: React.FC = () => {
//   const [state, dispatch] = useReducer(todoReducer, initialState);

//   const addTodo = (text: string) => {
//     dispatch({ type: TodoAction.ADD_TODO, payload: text });
//   };

  return (
    <ChakraProvider>
      <CSSReset />
      <Box 
        maxW="600px" 
        m="auto" 
        minH="100vh"
        mt="4"
        mb="4"
        p="4" 
        bg="gray.300" 
        borderRadius="lg"
      >
        <Heading 
          mb="4"
          textAlign="center"
          color="teal.500"
        >
          Todo List
        </Heading>
        <VStack
          align="stretch"
          spacing="4"
        >
          {/* <TodoInput addTodo={addTodo} />
          {state.todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
          ))} */}
        </VStack>
      </Box>
    </ChakraProvider>
  );
};

export default TodoList;
