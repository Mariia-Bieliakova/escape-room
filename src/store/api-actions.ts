import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError, AxiosInstance } from 'axios';
import { StatusCodes } from 'http-status-codes';
import { APIRoute, AppRoute } from '../const';
import { dropToken, saveToken } from '../services/token';
import { AuthData } from '../types/auth-data';
import { BookedQuestItem, BookingQuestInfo } from '../types/booking';
import { QuestInfo, QuestItem } from '../types/quest';
import { AppDispatch, State } from '../types/state';
import { UserData } from '../types/user-data';
import { redirectToRoute } from './action';
import { pushNotification } from './notifications/notifications';

export const fetchQuestsAction = createAsyncThunk<QuestItem[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchQuests',
  async (_arg, {extra: api, dispatch}) => {
    try {
      const {data} = await api.get<QuestItem[]>(APIRoute.Quests);
      return data;
    } catch(err) {
      dispatch(pushNotification({type: 'error', message: 'Can not download quests'}));
      throw err;
    }
  }
);

export const fetchQuestInfoAction = createAsyncThunk<QuestInfo, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchQuestInfo',
  async (id, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<QuestInfo>(`${APIRoute.Quests}/${id}`);

      return data;
    } catch(err) {
      if(err instanceof AxiosError) {
        if(err.response?.status === StatusCodes.NOT_FOUND) {
          dispatch(redirectToRoute(AppRoute.NotFound));
        }
      }
      dispatch(pushNotification({type: 'error', message: 'Can not download property'}));
      throw err;
    }
  }
);

export const fetchBookingQuestInfo = createAsyncThunk<BookingQuestInfo, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchBookingInfo',
  async (id, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<BookingQuestInfo>(`${APIRoute.Quests}/${id}${APIRoute.Booking}`);

      return data;
    } catch(err) {
      dispatch(pushNotification({type: 'warning', message: 'Sorry, can not download reviews.'}));

      throw err;
    }
  }
);

export const fetchReservations = createAsyncThunk<BookedQuestItem[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchReservations',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<BookedQuestItem[]>(APIRoute.Reservations);

      return data;
    } catch(err) {
      dispatch(pushNotification({type: 'error', message: 'Can not download favorite hotels'}));

      throw err;
    }
  }
);

export const checkAuthAction = createAsyncThunk<UserData, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<UserData>(APIRoute.Login);
    return data;
  }
);

export const loginAction = createAsyncThunk<UserData, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async({email, password}, {dispatch, extra: api}) => {
    try {
      const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
      saveToken(data.token);
      dispatch(redirectToRoute(AppRoute.Root));

      return data;
    } catch(err) {
      dispatch(pushNotification({type: 'error', message: 'Failed on login. Please try again'}));

      throw err;
    }
  }
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async(_arg, {dispatch, extra: api}) => {
    try {
      await api.delete(APIRoute.Logout);
      dropToken();
    } catch{
      dispatch(pushNotification({type: 'error', message: 'Cannot complete logout. Please, try again.'}));
    }
  }
);
