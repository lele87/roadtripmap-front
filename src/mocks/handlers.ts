import { rest } from "msw";
import { mockUser } from "./mockUser";
import { mockLocations } from "../mocks/mockLocations";

const mockToken = "1234567890";

export const handlers = [
  rest.post(
    `${process.env.REACT_APP_API_URL}user/register`,
    (req, res, ctx) => {
      return res(ctx.status(201), ctx.json(mockUser));
    }
  ),
  rest.post(`${process.env.REACT_APP_API_URL}user/login`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ token: mockToken }));
  }),
  rest.get(
    `${process.env.REACT_APP_API_URL}locations/list/1`,
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(mockLocations));
    }
  ),
];
