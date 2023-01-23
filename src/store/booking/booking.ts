import { createSlice } from '@reduxjs/toolkit';
import { FetchStatus, NameSpace } from '../../const';
import { BookingQuestInfo } from '../../types/booking';
import { fetchBookingQuestInfo } from '../api-actions';

type BookingProcess = {
  bookingInfo: BookingQuestInfo | null;
  fetchStatus: FetchStatus;
}

const initialState: BookingProcess = {
  bookingInfo: null,
  fetchStatus: FetchStatus.Idle
};

export const booking = createSlice({
  name: NameSpace.Booking,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchBookingQuestInfo.pending, (state) => {
        state.fetchStatus = FetchStatus.Pending;
      })
      .addCase(fetchBookingQuestInfo.fulfilled, (state, action) =>{
        state.fetchStatus = FetchStatus.Success;
        state.bookingInfo = action.payload;
      })
      .addCase(fetchBookingQuestInfo.rejected, (state) => {
        state.fetchStatus = FetchStatus.Error;
      });
  },
});
