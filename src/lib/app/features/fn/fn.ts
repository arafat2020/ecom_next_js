import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import React from "react";

interface Fn {
    open: boolean
    children: React.ReactNode
}

const initialState: Fn = {
    open: false,
    children: null
}

const fnSlice = createSlice({
    name: "fn",
    initialState,
    reducers: {

        sideBarOpen: (state) => {
            state.open = true
        },

        SidebarClose: (state) => {
            state.open = false
        },

    }
})

export default fnSlice.reducer
export const {
    SidebarClose,
    sideBarOpen
} = fnSlice.actions

export const isSidebarOpen = (state: RootState) => state.fn.open