import "dotenv/config";

interface AppEnvironment {
  DEV_PORT: string;
  DEV_HOST: string;
  DEV_PG_USER: string;
  DEV_PG_PASSWORD: string;
  DEV_PG_HOST: string;
  DEV_PG_PORT: string;
  DEV_PG_DB: string;
}

declare global {
  namespace NodeJS {
    interface ProcessEnv extends AppEnvironment {}
  }
}

function loadDevVariables() {
  return {
    appPort: Number(process.env.DEV_PORT),
    appHost: process.env.DEV_HOST,
    db: process.env.DEV_PG_DB,
    dbUser: process.env.DEV_PG_USER,
    dbPort: Number(process.env.DEV_PG_PORT),
    dbHost: process.env.DEV_PG_HOST,
    dbPassword: process.env.DEV_PG_PASSWORD,
  };
}

export { loadDevVariables };
