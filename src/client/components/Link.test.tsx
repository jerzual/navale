import * as React from "react";
import * as ReactDOM from "react-dom";
import Link from './Link';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Link />, div);
});
