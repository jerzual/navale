import m from "mithril";

import App from "./app.component";

describe("App component", () => {
  it("should have a title", () => {
    const cmp = m(App);
    expect(cmp).toBeDefined();
  });
});
