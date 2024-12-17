import { EnvKeys } from "./env";

export const envDefaults: Partial<EnvKeys> = {
  NODE_ENV: "production",
  PORT: "8000",
  BASE_PATH: "",
  LOG_PATH: "./logs",
};

export const defaultValidationConfig = {
  whitelist: true,
  forbidNonWhitelisted: true,
};
