import {observable} from "mobx";

class Store {
    @observable age: number = 35;
    addAge = () => {
        this.age++;
    }

}
export default new Store();