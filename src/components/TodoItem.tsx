import React, { useState } from 'react';
import {
  Box,
  Checkbox,
  Input,
  Button,
  Text,
  Flex,
} from '@chakra-ui/react';
import { 
  Todo, 
  TodoAction, 
  TodoActions 
} from '../reducers/todoReducers';
import {
  DeleteIcon,
  EditIcon,
  CheckIcon
} from '@chakra-ui/icons';

interface TodoItemProps {
  todo: Todo;
  dispatch: React.Dispatch<TodoActions>;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, dispatch }) => {
  const [isEditing, setEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    dispatch({ type: TodoAction.EDIT_TODO, payload: { id: todo.id, text: editedText } });
    setEditing(false);
  };

  const handleDelete = () => {
    dispatch({ type: TodoAction.DELETE_TODO, payload: todo.id });
  };

  const handleToggleComplete = () => {
    dispatch({ type: TodoAction.TOGGLE_COMPLETE, payload: todo.id });
  };

  return (
    <Box
      p="3"
      bg="white"
      borderRadius="md"
      boxShadow="md"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Flex align="center">
        <Checkbox
          isChecked={todo.complete}
          onChange={handleToggleComplete}
          mr="2"
          colorScheme="teal"
        />
        {isEditing ? (
          <Input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
        ) : (
          <Text textDecoration={todo.complete ? 'line-through' : 'none'}>{todo.text}</Text>
        )}
      </Flex>
      <Flex>
        {isEditing ? (
          <Button
            ml="2"
            onClick={handleSave}
            colorScheme="blue"
          >
            Save
          </Button>
        ) : (
          <>
            <Button
              ml="2"
              onClick={handleEdit}
              isDisabled={todo.complete}
              colorScheme="blue"
              leftIcon={<EditIcon />}
            >
              Edit
            </Button>
            <Button
              ml="2"
              onClick={handleDelete}
              isDisabled={!todo.complete}
              colorScheme="red"
              leftIcon={<DeleteIcon />}
            >
              Delete
            </Button>
            {todo.complete && (
              <Button
                ml="2"
                colorScheme="teal"
                onClick={handleToggleComplete}
                leftIcon={<CheckIcon />}
              >
                Undo
              </Button>
            )}
          </>
        )}
      </Flex>
    </Box>
  );
};

export default TodoItem;
