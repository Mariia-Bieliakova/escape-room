import { NameSpace } from '../../const';
import { Notification } from '../../types/notification';
import { State } from '../../types/state';

export const getNotifications = (state: State): Notification[] => state[NameSpace.Notifications].notifications;
