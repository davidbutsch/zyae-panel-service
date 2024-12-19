import { EnvKeys } from "./env";

export const envDefaults: Partial<EnvKeys> = {
  NODE_ENV: "production",
  PORT: "8000",
  BASE_PATH: "",
  LOG_PATH: "./logs",
  DISK_PATH: process.platform == "win32" ? "C:/" : "/",
};

export const defaultValidationConfig = {
  whitelist: true,
  forbidNonWhitelisted: true,
};
