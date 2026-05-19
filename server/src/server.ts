import dotenv from "dotenv";

dotenv.config();

const { app } = await import("./app.js");
const { env } = await import("./shared/config/env.js");

app.listen(env.port, () => {
  console.log(`API server is running`);
  console.log(`Base URL: http://localhost:${env.port}`);
  console.log(`Health check: http://localhost:${env.port}/api/health`);
});
