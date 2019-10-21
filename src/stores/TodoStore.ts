import {observable, action} from "mobx";
interface Todo {
    id: string;
    label: string;

}

let counter = 0;
export class TodoStore {
    @observable
    public todos: Todo[] = [];
    @action
    addTodo = (label: string) => {
        this.todos.push({
            id: `todo-${counter++}`,
            label
        })
    }
}