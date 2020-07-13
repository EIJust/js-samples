import React from 'react';
import { unmountComponentAtNode, render } from 'react-dom';
import { act } from 'react-dom/test-utils';

import App from './App';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('render with and without name', () => {
  act(() => {
    render(<App />, container);
  });
  expect(container.textContent).toBe("Hey");

  act(() => {
    render(<App name="testName" />, container);
  });
  expect(container.textContent).toBe("testName");
});

it('render some data', async () => {
  const fakeData = {
    data: "some data"
  };

  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeData)
    })
  );

  await act(async () => {
    render(<App />, container);
  });

  global.fetch.mockRestore();
});