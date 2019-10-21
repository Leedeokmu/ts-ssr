import React, {Component} from "react";
import {inject, observer} from "mobx-react";
import {TodoStore} from "../stores/TodoStore";

@inject("todoStore")
@observer
class TodoList extends Component<{todoStore: TodoStore}, {}> {
    render() {
        const list = this.props.todoStore.todos.map(todo => {
            return (
                <li key={todo.id}>{todo.label}</li>
            );
        });

        return (
            <ul>{list}</ul>
        );
    }
}

export default TodoList;
