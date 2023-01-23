import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, FetchStatus, NameSpace } from '../../const';
import { UserData } from '../../types/user-data';
import { checkAuthAction, loginAction, logoutAction } from '../api-actions';

type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  user: null | UserData;
  fetchStatus: FetchStatus;
}

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknow,
  user: null,
  fetchStatus: FetchStatus.Idle
};

export const user = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.user = action.payload;
        state.fetchStatus = FetchStatus.Success;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.fetchStatus = FetchStatus.Error;
      })
      .addCase(loginAction.pending, (state) => {
        state.fetchStatus = FetchStatus.Pending;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.user = action.payload;
        state.fetchStatus = FetchStatus.Success;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.fetchStatus = FetchStatus.Error;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.user = null;
        state.fetchStatus = FetchStatus.Idle;
      });
  },
});
