import React from 'react';
import {TodoStore} from "../TodoStore";

describe("TodoStore", () => {
    it("addTodo() - add to todos", () => {
        // Given
        const todoStore = new TodoStore();
        // When
        todoStore.addTodo("hello");
        // Then
        expect(todoStore.todos.length).toBe(1);
    });
})