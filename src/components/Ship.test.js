import React from 'react';
import ReactDOM from 'react-dom';
import Ship from './Ship';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Ship />, div);
});