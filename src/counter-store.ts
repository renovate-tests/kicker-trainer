import { observable, action } from "mobx";
import { component } from "tsdi";

@component
export class CounterStore {
  @observable public counter = 0;

  @action
  public increment(): void {
    this.counter++;
  }
}
