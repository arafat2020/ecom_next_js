import { route,procedure } from "./trpc";
export const appRouter = route({
    test:procedure.query(async()=>{
        return {
            msg:'ok'
        }
    })
});

export type AppRouter = typeof appRouter;