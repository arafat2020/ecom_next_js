import prisma from "@/lib/db";
import { route, procedure } from "./trpc";
import { initTRPC } from "@trpc/server";
const {createCallerFactory} = initTRPC.create()
export const appRouter = route({
    test: procedure.query(async () => {
        return {
            msg: 'ok'
        }
    }),
    getCategories: procedure.query(async () => {
        await prisma.$connect()
        return await prisma.category.findMany()
    })
});
export const createCaller = createCallerFactory(appRouter)
export type AppRouter = typeof appRouter;
