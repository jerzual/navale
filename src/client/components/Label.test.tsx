import * as React from "react";
import * as ReactDOM from "react-dom";
import Label from './Label';
import {util} from "protobufjs";

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Label />, div);
});
