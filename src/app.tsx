import { bind } from "decko";
import { observer } from "mobx-react";
import * as React from "react";
import styled from "styled-components";
import { external, inject } from "tsdi";

import { CounterStore } from "./counter-store";
import { DoubleCounter } from "./doubles-store";

const AppContainer = styled.div`
  line-height: 2em;
`;

@observer
@external
export class App extends React.Component {
  @inject private store: CounterStore;
  @inject({ lazy: false })
  private doubler: DoubleCounter;

  public render(): JSX.Element {
    return (
      <AppContainer>
        <h1>Hello World</h1>
        <p>Clicked {this.store.counter} times</p>
        <p>Doubled it is {this.doubler.doubled} times</p>
        <button onClick={this.onClick}>Hit me!</button>
      </AppContainer>
    );
  }

  @bind
  private onClick(): void {
    this.store.increment();
  }
}
