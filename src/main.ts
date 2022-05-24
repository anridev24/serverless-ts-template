import signale from "signale";
import config from "./config";

export const start = async function () {
  signale.debug(config.SECRET_TOKEN);
};
