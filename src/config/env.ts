import dotenv from "dotenv";

dotenv.config();

interface envConfig {
  PORT: string;
  BASE_URL: string;
  DATABASE_URL: string;
  APP_URL: string;
  BETTER_AUTH_SECRET: string;
  BETTER_AUTH_URL: string;
  ADMIN_NAME: string;
  ADMIN_PASSWORD: string;
  ADMIN_EMAIL: string;
  APP_USER: string;
  APP_PASS: string;
}

const loadEnvVariables = (): envConfig => {
  const requiredEnvVars = [
    "PORT",
    "BASE_URL",
    "DATABASE_URL",
    "APP_URL",
    "BETTER_AUTH_SECRET",
    "BETTER_AUTH_URL",
    "ADMIN_NAME",
    "ADMIN_PASSWORD",
    "ADMIN_EMAIL",
    "APP_USER",
    "APP_PASS",
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
    BASE_URL: process.env.BASE_URL as string,
    DATABASE_URL: process.env.DATABASE_URL as string,
    BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET as string,
    APP_URL: process.env.APP_URL as string,
    BETTER_AUTH_URL: process.env.BETTER_AUTH_URL as string,
    ADMIN_NAME: process.env.ADMIN_NAME as string,
    ADMIN_PASSWORD: process.env.ADMIN_PASSWORD as string,
    ADMIN_EMAIL: process.env.ADMIN_EMAIL as string,
    APP_USER: process.env.APP_USER as string,
    APP_PASS: process.env.APP_PASS as string,
  };
};

export const envVariables = loadEnvVariables();
