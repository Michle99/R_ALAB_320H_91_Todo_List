import React, { useState } from 'react';
import { Input, Button, Flex } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

interface TodoInputProps {
  addTodo: (text: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleAddTodo = () => {
    if (text.trim() !== '') {
      addTodo(text);
      setText('');
    }
  };

  return (
    <Flex 
      mb="4"
    >
      <Input
        type="text"
        placeholder="Add a new todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
        mr="2"
        data-testid="todo-input"
      />
      <Button 
        onClick={handleAddTodo} 
        colorScheme="teal"
        ml="4"
        leftIcon={<AddIcon/>}
        data-testid="add-todo-button"
      >
        Add Todo
      </Button>
    </Flex>
  );
};

export default TodoInput;
