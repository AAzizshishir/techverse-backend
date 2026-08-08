import dotenv from "dotenv";

dotenv.config();

interface envConfig {
  PORT: string;
  DATABASE_URL: string;
  APP_URL: string;
  BETTER_AUTH_SECRET: string;
  BETTER_AUTH_URL: string;
  ADMIN_NAME: string;
  ADMIN_PASSWORD: string;
  ADMIN_EMAIL: string;
}

const loadEnvVariables = (): envConfig => {
  const requiredEnvVars = [
    "PORT",
    "DATABASE_URL",
    "APP_URL",
    "BETTER_AUTH_SECRET",
    "BETTER_AUTH_URL",
    "ADMIN_NAME",
    "ADMIN_PASSWORD",
    "ADMIN_EMAIL",
  ];

  requiredEnvVars.forEach((variable) => {
    if (!process.env[variable]) {
      throw new Error(
        `Environment variable ${variable} is required but not set in .env file.`,
      );
    }
  });

  return {
    PORT: process.env.PORT as string,
    DATABASE_URL: process.env.DATABASE_URL as string,
    BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET as string,
    APP_URL: process.env.APP_URL as string,
    BETTER_AUTH_URL: process.env.BETTER_AUTH_URL as string,
    ADMIN_NAME: process.env.ADMIN_NAME as string,
    ADMIN_PASSWORD: process.env.ADMIN_PASSWORD as string,
    ADMIN_EMAIL: process.env.ADMIN_EMAIL as string,
  };
};

export const envVariables = loadEnvVariables();
