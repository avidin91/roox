import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { instance } from '@shared/api/axios-api';
import { IUser } from '@shared/types';

interface IUsersState {
	users: IUser[];
	isLoading: boolean;
}

const initialState: IUsersState = {
	users: [],
	isLoading: false
};

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
	try {
		const response = await instance.get('users');

		return response.data;
	} catch (e: any) {
		alert(e.response.data.message);
	}
});

const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		sortUsersByCity: (state) => {
			state.users.sort((a, b) => {
				const cityA = a.address.city.toLowerCase();
				const cityB = b.address.city.toLowerCase();

				return cityA > cityB ? 1: -1;
			});
		},
		sortUsersByCompany: (state) => {
			state.users.sort((a, b) => {
				const cityA = a.company.name.toLowerCase();
				const cityB = b.company.name.toLowerCase();

				return cityA > cityB ? 1: -1;
			});
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchUsers.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(fetchUsers.fulfilled, (state, action) => {
				state.users = action.payload;
				state.isLoading = false;
			})
			.addCase(fetchUsers.rejected, (state) => {
				state.isLoading = false;
			});
	}
});

export const { sortUsersByCity, sortUsersByCompany } = usersSlice.actions;

export default usersSlice.reducer;
