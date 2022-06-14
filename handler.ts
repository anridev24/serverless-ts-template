"use strict";

import { functions } from "./src/main";

module.exports.main = async (event: any) => {
  const response = await functions.main();

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Function Executed Successfully!", response }, null, 2),
  };
};
