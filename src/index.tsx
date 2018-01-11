import * as React from "react";
import * as ReactDOM from "react-dom";
import { TSDI } from "tsdi";

import { App } from "./app";

const tsdi = new TSDI();
tsdi.enableComponentScanner();

ReactDOM.render(<App />, document.querySelector(".app"));
