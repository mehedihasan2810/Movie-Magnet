const config = {
  botToken: process.env.TG_BOT_TOKEN!,
  appName: process.env.APP_NAME || "Server",
  publicHost:
    process.env.PUBLIC_HOST || "https://optimum-lion-mostly.ngrok-free.app",
  webAppUrl:
    process.env.WEB_APP_URL || "https://optimum-lion-mostly.ngrok-free.app",
};

export default config;
