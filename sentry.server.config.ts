// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://3dc4a2e27ecdf2133c351acfaa13f7ba@o4512248671633408.ingest.us.sentry.io/4512248723996672",

  integrations: [
    // send console.log, console.warn, and console.error calls as logs to Sentry
    Sentry.consoleLoggingIntegration({ levels: ["log", "warn", "error"] }),
  ],

  // integrations: [
  //   // Add the Vercel AI SDK integration to sentry.server.config.ts
  //   Sentry.vercelAIIntegration({
  //     recordInputs: true,
  //     recordOutputs: true,
  //   }),
  // ],

  // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
  tracesSampleRate: 1,

  // Enable logs to be sent to Sentry
  enableLogs: true,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
