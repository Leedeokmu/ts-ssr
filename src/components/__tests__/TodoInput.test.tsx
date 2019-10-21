import React, {useImperativeHandle} from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {TodoStore} from "../../stores/TodoStore";
import TodoInput from "../TodoInput";
import {configure, mount} from "enzyme";

configure({ adapter: new Adapter() })

describe('TodoInput', () => {
    it("renders properly", () => {
        // Given
        const todoStore = new TodoStore();
        const component = mount(<TodoInput todoStore={todoStore}/>);
        // When
        const input = component.find("input").first();
        const button = component.find("button").first();
        input.simulate("change", {target: {value: "user input"}});
        button.simulate("click");
        component.update();

        // Then
        expect(todoStore.todos.length).toBe(1);
        expect((input.getDOMNode() as HTMLInputElement).value).toBe("");
    })
})