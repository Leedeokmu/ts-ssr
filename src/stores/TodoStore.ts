import {observable, action} from "mobx";
interface Todo {
    label: string;
}

export class TodoStore {
    @observable
    public todos: Todo[] = [];
    @action
    addTodo = (label: string) => {
        this.todos.push({
            label
        })
    }
}