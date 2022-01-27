"use strict";

const app = require("./dist/main");

module.exports.main = async (event) => {
  const response = await app.start();

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Function Executed Successfully!", response }, null, 2),
  };
};
