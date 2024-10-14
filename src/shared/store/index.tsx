import { configureStore } from '@reduxjs/toolkit';
import usersSlice from '@shared/store/slices/users.slice';

export const store = configureStore({
	reducer: {
		userStore: usersSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
