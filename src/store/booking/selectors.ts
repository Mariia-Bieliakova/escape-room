import { createSelector } from '@reduxjs/toolkit';
import { FetchStatus, NameSpace } from '../../const';
import { BookingQuestInfo } from '../../types/booking';
import { State } from '../../types/state';

export const getBookingInfo = (state: State): BookingQuestInfo | null=> state[NameSpace.Booking].bookingInfo;

export const getBookingInfoFetchStatus = (state: State): FetchStatus => state[NameSpace.Booking].fetchStatus;

export const selectBookingInfoStatus = createSelector(
  [getBookingInfoFetchStatus],
  (status) => ({
    isLoading: [FetchStatus.Idle, FetchStatus.Pending].includes(status),
    isError: status === FetchStatus.Error,
    isSuccess: status === FetchStatus.Success
  })
);
