"use strict";

const start = require("./dist/main");

module.exports.main = async (event) => {
  await start();
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Function Executed Successfully!", input: event }, null, 2),
  };
};
