import { configureStore } from '@reduxjs/toolkit'
import chertSlice from "../app/features/chert/chert"
import fnSlice from "../app/features/fn/fn"

export const store = configureStore({
  reducer: {
    "chert":chertSlice,
    "fn": fnSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch