import { render, screen } from "@testing-library/react";
import App from "../App";

describe('App Component', () => {
    it('render App Component on the screen', () => {
        render(<App/>);

        const todoListElement = screen.getByTestId('todo-list');
        expect(todoListElement).toBeTruthy();
        // screen.debug();
    });
});