"use strict";

const app = require("./dist/main");

module.exports.main = async (event) => {
  await app.start();
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Function Executed Successfully!" }, null, 2),
  };
};
