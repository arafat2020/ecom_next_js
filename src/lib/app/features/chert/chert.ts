import { serverClient } from "@/app/_trpc/serverClient";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

type Awaited<T> = T extends PromiseLike<infer U> ? U : T;
type ElementType<T> = T extends (infer U)[] ? U : never;
type Product = Awaited<ReturnType<typeof serverClient.getProducts>>;


interface Chert {
    obj: ElementType<Product>
    quantity: number
}

const initialState: Chert[] = []


const chertSlice = createSlice({
    name: "chert",
    initialState,
    reducers: {

        addToChart: (state, action: PayloadAction<ElementType<Product>>) => {
            const isExist = state?.find(e => e.obj.id === action.payload.id)
            const index = state?.findIndex(e => e.obj.id === action.payload.id)
            if (isExist) {
                state[index as number].quantity += 1
            } else {
                state?.push({
                    obj: action.payload,
                    quantity: 1
                })
            }
        },

        removeFromChert: (state, action: PayloadAction<{ id: string }>) => {
            const isExist = state.find(e => e.obj.id === action.payload.id)
            const index = state.findIndex(e => e.obj.id === action.payload.id);
            if (isExist) {
                if (isExist.quantity === 1) {
                    state.splice(index as number, 1)
                } else {
                    if (state.length > 0) state[index as number].quantity -= 1
                }
            }
        }
    }
})

export const {
    addToChart,
    removeFromChert
} = chertSlice.actions

export default chertSlice.reducer

export const getChert = (state: RootState) => state.chert