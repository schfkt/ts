import chai from "chai";
import chaiHttp from "chai-http";
import sinonChai from "sinon-chai";

import {server} from "../src/server";

chai.use(chaiHttp);
chai.use(sinonChai);

after(async () => {
  const runningServer = await server;
  await new Promise((resolve) => {
    runningServer.close(resolve);
  });
});
