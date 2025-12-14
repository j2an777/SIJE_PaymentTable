import { http, HttpResponse } from "msw";

import MockData from "./data/mockData.json";

const handlers = [
  http.get("/api/mock", () => {
    return HttpResponse.json(MockData);
  }),
];

export { handlers };
