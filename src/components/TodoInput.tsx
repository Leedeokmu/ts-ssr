import React from "react"
import {inject, observer} from "mobx-react";
import {TodoStore} from "../stores/TodoStore";

@inject("todoStore")
@observer
class TodoInput extends React.Component<{todoStore: TodoStore}, {}>{
    private _input! : HTMLInputElement;
    _addTodo = () => {
        const text = this._input.value;
        if (text !== "") {
            this.todoStore().addTodo(text);
            this._input.value = "";
        }
    };

    private todoStore = (): TodoStore => {
        return this.props.todoStore as TodoStore;
    }

    render() {
        return (
            <>
                <input type="text" ref={ref => this._input = ref as HTMLInputElement}/>
                <button onClick={this._addTodo}>ADD</button>
            </>
        )
    }
}

export default TodoInput;