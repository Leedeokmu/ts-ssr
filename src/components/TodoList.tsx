import React from "react"
import {observer} from "mobx-react";
import {Todo} from "../stores/todoStore";

interface TodoListProps {
    todos: Todo[];
}

@observer
class TodoList extends React.Component<TodoListProps>{
    render() {
        console.log("rerender");
        return (
            <>
                {this.props.todos.map(todo => (
                    <li key={todo.id}>
                        {todo.text}
                    </li>
                ))}
            </>
        )
    }
}

export default TodoList;