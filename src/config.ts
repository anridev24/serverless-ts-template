import "dotenv/config";
import signale from "signale";

const config = {
  SECRET_TOKEN: process.env.SECRET_TOKEN || "",
};

for (const key in config) {
  if (!config[key as keyof typeof config]) {
    signale.fatal(`Missing ${key} in .env`);
    process.exit(1);
  }
}

export default config;
