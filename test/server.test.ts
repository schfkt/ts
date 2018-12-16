import {expect, request} from "chai";
import {server} from "../src/server";

describe("server", () => {
  it("Responds to a request", async () => {
    const response = await request(server).get("/");

    expect(response).to.have.status(200);
    expect(response.text).to.eq("Hello!");
  });
});
