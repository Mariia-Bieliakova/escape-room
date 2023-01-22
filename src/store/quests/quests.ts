import { createSlice } from '@reduxjs/toolkit';
import { FetchStatus, NameSpace } from '../../const';
import { QuestInfo, QuestItem } from '../../types/quest';
import { fetchQuestInfoAction, fetchQuestsAction } from '../api-actions';

type Quests = {
  quests: QuestItem[];
  questInfo: QuestInfo | null;
  fetchQuestsStatus: FetchStatus;
  fetchQuestInfoStatus: FetchStatus;
}

const initialState: Quests = {
  quests: [],
  questInfo: null,
  fetchQuestsStatus: FetchStatus.Idle,
  fetchQuestInfoStatus: FetchStatus.Idle
};

export const quests = createSlice({
  name: NameSpace.Quest,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchQuestsAction.pending, (state) => {
        state.fetchQuestsStatus = FetchStatus.Pending;
      })
      .addCase(fetchQuestsAction.fulfilled, (state, action) => {
        state.quests = action.payload;
        state.fetchQuestsStatus = FetchStatus.Success;
      })
      .addCase(fetchQuestsAction.rejected, (state) => {
        state.fetchQuestsStatus = FetchStatus.Error;
      })
      .addCase(fetchQuestInfoAction.pending, (state) => {
        state.fetchQuestInfoStatus = FetchStatus.Pending;
      })
      .addCase(fetchQuestInfoAction.fulfilled, (state, action) => {
        state.questInfo = action.payload;
        state.fetchQuestInfoStatus = FetchStatus.Success;
      })
      .addCase(fetchQuestInfoAction.rejected, (state) => {
        state.fetchQuestInfoStatus = FetchStatus.Error;
      });
  }
});
