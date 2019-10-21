import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {TodoStore} from "../../stores/TodoStore";
import TodoList from "../TodoList";
import {mount, configure} from "enzyme";

configure({ adapter: new Adapter() })

describe('TodoList', () => {
    it("renders properly", () => {
        // Given
        const todoStore = new TodoStore();
        const component = mount(<TodoList todoStore={todoStore}/>);
        // When
        todoStore.addTodo("add one");
        // Then
        expect(component.find("ul")).toMatchSnapshot();
    })
})