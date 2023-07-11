import { Clockodo } from "clockodo";

describe("test", () => {
  test("", () => {
    const c = new Clockodo({
      authentication: {
        apiKey: "",
        user: "",
      },
      client: {
        email: "",
        name: "",
      },
    });

    console.log(c);
  });
});
