import { env } from "@/common";

export const config = {
  port: env.keys.PORT,
  basePath: env.keys.BASE_PATH,
  diskPath: env.keys.DISK_PATH,
  corsWhitelist: env.keys.CORS_WHITELIST.split(","),
};
