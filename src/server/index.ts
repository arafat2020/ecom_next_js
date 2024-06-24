import prisma from "@/lib/db";
import { route, procedure } from "./trpc";
import { initTRPC } from "@trpc/server";
import { string, z } from "zod";
const { createCallerFactory } = initTRPC.create()
export const appRouter = route({
    // ===========================================================
    // -_-Category route start-_-
    // ===========================================================
    getCategories: procedure.query(async () => {
        const data = await prisma.category.findMany({
            select: {
                id: true,
                name: true,
                img: true,
                subCategory: {
                    select: {
                        id: true,
                        name: true
                    }
                }
            }
        })
        // console.log(data,'arr');

        return data
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
    })).mutation(async ({ input }) => {
        return await prisma.category.delete({
            where: {
                id: input.id
            }
        })
    }),
    postSubCategory: procedure.input(z.object({
        categoryId: z.string().min(1),
        name: z.string().min(0)
    })).mutation(async ({ input }) => {
        const data = await prisma.subCategory.create({
            data: input
        })
        return data
    }),
    getCategory: procedure.input(z.object({ categoryId: z.string().min(1) })).query(async ({ input }) => {
        const data = await prisma.subCategory.findFirst({
            where: {
                categoryId: input.categoryId
            }
        })
        return data
    }),
    deleteSubCategory: procedure.input(z.object({ id: z.string().min(1) })).mutation(async ({ input }) => {
        const data = await prisma.subCategory.delete({
            where: {
                id: input.id
            }
        })
        return data
    }),
    // ===========================================================
    // -_-Category route end-_-
    // ===========================================================
    // ===========================================================
    // -_-Product route start-_-
    // ===========================================================


    postProduct: procedure.input(z.object({
        name: z.string().min(1).max(70),
        description: z.string().min(25),
        price: z.number().min(1).max(10000),
        discount: z.number().default(0),
        primaryImg: z.string().min(1),
        catagoryId: z.string().min(1),
        subCategoryId: z.string().min(1),
        showcaseImg: z.array(z.string())
    })).mutation(async ({ input }) => {
        const data = await prisma.product.create({
            data: input
        })
        return data
    }),


    getProducts: procedure.query(async () => {
        return prisma.product.findMany({
            include: {
                SubCategory: true,
            }
        })
    }),


    getProduct: procedure.input(z.object({ id: z.string().min(1) })).query(async ({ input }) => {
        return prisma.product.findUnique({
            where: input,
            include: {
                SubCategory: true
            }
        })
    }),
    // ===========================================================
    // -_-Product route end-_-
    // ===========================================================
    // ===========================================================
    // -_-Banner route start-_-
    // ===========================================================
    getBannerData: procedure.query(async () => {
        const data = await prisma.banner.findMany({
            include: {
                product: true
            }
        })
        return data
    }
    ),
    // ===========================================================
    // -_-Banner route end-_-
    // ===========================================================
    // ===========================================================
    // -_-payment route start-_-
    // ===========================================================
    createPayment: procedure.input(z.object({
        products: z.array(z.object({
            productId: z.string().min(1),
            finalPrice: z.number().min(1),
            quantity: z.number().min(1)
        }))
    })).mutation(async ({ input }) => {
        return prisma.createPayment.create({
            data: {
                PrductPayment: {
                    createMany: {
                        data: input.products
                    }
                }
            },
            include: {
                _count: true,
                PrductPayment: true
            }
        })
    }),

    getCreatedPayment: procedure.input(z.object({
        id: z.string().min(1)
    })).query(async ({ input }) => {
        return prisma.createPayment.findUnique({
            where: {
                id: input.id
            },
            include: {
                _count: true,
                PrductPayment: {
                    include: {
                        product: true
                    }
                }
            }
        })
    })
    // ===========================================================
    // -_-payment route end-_-
    // ===========================================================

});
export const createCaller = createCallerFactory(appRouter)
export type AppRouter = typeof appRouter;
