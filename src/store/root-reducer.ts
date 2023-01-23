import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { booking } from './booking/booking';
import { notifications } from './notifications/notifications';
import { quests } from './quests/quests';
import { ui } from './ui/ui';
import { user } from './user/user';

export const rootReducer = combineReducers({
  [NameSpace.UI]: ui.reducer,
  [NameSpace.Quest]: quests.reducer,
  [NameSpace.Notifications]: notifications.reducer,
  [NameSpace.User]: user.reducer,
  [NameSpace.Booking]: booking.reducer
});
