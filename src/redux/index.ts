import { configureStore } from "@reduxjs/toolkit";
import WalletReducer from "./wallets";
import ThemeReducer from "./theme";

const store = configureStore({
  reducer: {
    wallet: WalletReducer,
    theme: ThemeReducer,
  },
});

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
