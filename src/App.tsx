import React, {Component} from 'react';
import './App.css';
import {inject, observer} from "mobx-react";
import TodoStore from "./stores/todoStore"
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";

interface AppProps {
    todoStore?: TodoStore;
}

@inject('todoStore')
@observer
class App extends Component<AppProps, {}> {
    render() {
        const store = this.props.todoStore as TodoStore;
        return (
            <>
                <TodoInput addTodo={store.addTodo}/>
                <TodoList todos={store.todos}/>
            </>
        );
    }
}

export default App;