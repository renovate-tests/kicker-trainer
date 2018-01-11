import { observable, reaction } from "mobx";
import { component, inject, initialize } from "tsdi";

import { CounterStore } from "./counter-store";

@component
export class DoubleCounter {
  @inject private store: CounterStore;

  @observable public doubled: number;

  @initialize
  protected init(): void {
    reaction(
      () => this.store.counter,
      n => {
        this.doubled = n * 2;
      },
      { fireImmediately: true }
    );
  }
}
