import prisma from "@/lib/db";
import { route, procedure } from "./trpc";
import { initTRPC } from "@trpc/server";
import { z } from "zod";
const { createCallerFactory } = initTRPC.create()
export const appRouter = route({
    // ===========================================================
    // -_-Category route start-_-
    // ===========================================================
    getCategories: procedure.query(async () => {
        const data = await prisma.category.findMany({
            select:{
                id: true,
                name: true,
                subCategory:{
                    select:{
                        id:true,
                        name:true
                    }
                }
            }
        })
        // console.log(data,'arr');
        const arr:any = []
        await data.forEach(e=>{
            arr.push(e)
        })
        return arr
    }),
    postCategory: procedure.input(z.object({
        name: z.string().min(1),
        img: z.string().min(1)
    })).mutation(async (obj) => {
        const data = await prisma.category.create({
            data: obj.input
        })
        return data
    }),
    deleteCategory: procedure.input(z.object({
        id: z.string().min(1)
    })).mutation(async ({input}) => {
        return await prisma.category.delete({
            where: {
                id: input.id
            }
        })
    }),
    postSubCategory: procedure.input(z.object({
        categoryId: z.string().min(1),
        name: z.string().min(0)
    })).mutation(async ({input}) => {
        const data = await prisma.subCategory.create({
            data: input
        })
        return data
    }),
    getCategory: procedure.input(z.object({categoryId:z.string().min(1)})).query(async({input})=>{
        const data = await prisma.subCategory.findFirst({
            where:{
                categoryId:input.categoryId
            }
        })
        return data
    }),
    deleteSubCategory: procedure.input(z.object({id:z.string().min(1)})).mutation(async({input})=>{
        const data = await prisma.subCategory.delete({
            where:{
                id: input.id
            }
        })
        return data
    })
    // ===========================================================
    // -_-Category route end-_-
    // ===========================================================
});
export const createCaller = createCallerFactory(appRouter)
export type AppRouter = typeof appRouter;
