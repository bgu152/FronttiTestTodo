import React from 'react';
import TodoTable from './TodoTable';
import App from './App';
import '@testing-library/jest-dom/extend-expect'
import {render,screen,fireEvent} from '@testing-library/react'

test('add todo',() => {
  const { container, getByText, getByPlaceholderText } = render(<App />);

  const desc = getByPlaceholderText('Description');
  fireEvent.change(desc, { target: { value: 'Go to coffee' } })
  const date = getByPlaceholderText('Date');
  fireEvent.change(date, { target: { value: '29.11.2019' } })

  const button = getByText('Add');
  fireEvent.click(button);

  expect(screen.getByText('Go to coffee')).toBeInTheDocument();
});

test('add todo',() => {
  const { container, getByText, getByPlaceholderText } = render(<App />);

  const desc = getByPlaceholderText('Description');
  fireEvent.change(desc, { target: { value: 'Go to coffee' } })
  const date = getByPlaceholderText('Date');
  fireEvent.change(date, { target: { value: '29.11.2020' } })

  const button = getByText('Add');
  fireEvent.click(button);

  expect(screen.getByText('Go to coffee')).toBeInTheDocument();
})


