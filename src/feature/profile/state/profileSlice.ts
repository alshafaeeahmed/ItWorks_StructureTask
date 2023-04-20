// Outer imports:
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface ProfileState {
  isLoading: boolean;
}

const initialState: ProfileState = {
  isLoading: false,
};

export const ProfileSlice = createSlice({
  name: 'ProfileSlice',
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const {setIsLoading} = ProfileSlice.actions;

export default ProfileSlice.reducer;
