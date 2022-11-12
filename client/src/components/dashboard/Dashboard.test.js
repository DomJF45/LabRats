import React from "react";
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { fireEvent, render, screen } from "@testing-library/react";
import { renderWithProviders } from "../../util/test-utils";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./Dashboard";
import createMockStore from 'redux-mock-store';

const userState = {
  user: {
    email: 'test@mail.com',
    name: 'John',
    password: 'password123',
    role: 'Principle Investigator',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNGRiZTVhMWJmMWNmZTNmZDExZmYzOCIsImlhdCI6MTY2Nzk2NTc0OSwiZXhwIjoxNjcwNTU3NzQ5fQ.DUbIp1vsUUMt_5bsCnkdoE1SQCHX7u4twE__8ez7IzE',
    _id: '634dbe5a1bf1cfe3fd11ff38'
  }
}

const labState = {
  labs: {
    labName: 'Big Brain Lab',
    admin: [
      {adminName: 'John', adminId: '634dbe5a1bf1cfe3fd11ff38'}
    ]
  }
}

const handlers = [
  rest.get('/api/user', (req, res, ctx) => {
    return res(ctx.json(userState), ctx.delay(150));
  }),
  rest.get('/api/lab', (req, res, ctx) => {
    return res(ctx.json(labState), ctx.delay(170));
  })
]
const server = setupServer(...handlers)

const mockStore = createMockStore([]);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());


test('Should Render Create a Lab', async () => {
  // const state = {
  //   userState,
  //   labState
  // }
  // const store = mockStore(state);
  // render (<Router><Dashboard /></Router>, {
  //   wrapper: ({children}) => <Provider store={store}>{children}</Provider>
  // })

  renderWithProviders(<Router><Dashboard /></Router>)

  expect(await screen.findByText(/Create a Lab/i)).toBeInTheDocument();
})
