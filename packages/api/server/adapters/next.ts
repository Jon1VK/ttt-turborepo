import { appRouter } from "../router";
import { createTRPCContext } from "../trpc";
import { createNextApiHandler } from "@trpc/server/adapters/next";

export const nextApiHandler = createNextApiHandler({
  router: appRouter,
  createContext: createTRPCContext,
  onError:
    process.env.NODE_ENV === "development"
      ? ({ path, error }) => {
          console.error(
            `❌ tRPC failed on ${path ?? "<no-path>"}: ${error.message}`
          );
        }
      : undefined,
});
