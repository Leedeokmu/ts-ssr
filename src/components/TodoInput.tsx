import React from "react"

interface TodoInputProps {
    addTodo(text: string): void;
}

class TodoInput extends React.Component<TodoInputProps>{
    private _input! : HTMLInputElement;
    private _addTodo = () => {
        const text = this._input.value;
        if (text !== "") {
            this.props.addTodo(text);
            this._input.value = "";
        }
    };

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