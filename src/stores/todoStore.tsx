import {action, observable} from "mobx";

export interface Todo {
    id?: string;
    text?: string;
}
export default class TodoStore {
    @observable private _todos: Todo[] = [];
    get todos(): Todo[] {
        return this._todos;
    }

    @action
    addTodo = (text: string) : void => {
        this.todos.push({
            id: (this.todos.length+1).toString(),
            text
        })
    }
}