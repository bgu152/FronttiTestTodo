import React from 'react';
import TodoTable from './TodoTable';
import App from './App';
import '@testing-library/jest-dom/extend-expect'
import {render,screen,fireEvent} from '@testing-library/react'
import App2 from './App2';

test('renders learn react link', () => {
  render(<App2 />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


test('add todo',() => {
  const { container, getByText, getByPlaceholderText } = render(<App />);

  const desc = getByPlaceholderText('Description');
  fireEvent.change(desc, { target: { value: 'Go to coffee' } })
  const date = getByPlaceholderText('Date');
  fireEvent.change(date, { target: { value: '29.11.2019' } })

  const buttonAdd = getByText('Add');
  fireEvent.click(buttonAdd);

  expect(screen.getByText('Go to coffee')).toBeInTheDocument();

  const buttonClear = getByText('Clear');
  fireEvent.click(buttonClear);

  expect(container).not.toHaveTextContent('Go to coffee');
;
});

