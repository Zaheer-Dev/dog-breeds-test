import { configureStore } from "@reduxjs/toolkit";
import { breedsService } from "./breedService";
// import snackService from "./services/snack/snackService";
import subBreedsService from "./subBreedsService"
export const store =  configureStore({
  reducer: {
    [breedsService.reducerPath]: breedsService.reducer,
    subBreedsService,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      breedsService.middleware
    ),
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
// export type RootState = ReturnType<typeof store.getState>
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch
