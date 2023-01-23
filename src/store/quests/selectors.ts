import { createSelector } from '@reduxjs/toolkit';
import { FetchStatus, NameSpace } from '../../const';
import { QuestInfo, QuestItem } from '../../types/quest';
import { State } from '../../types/state';

export const getQuests = (state: State): QuestItem[] => state[NameSpace.Quest].quests;

export const getQuestsFetchStatus = (state: State): FetchStatus => state[NameSpace.Quest].fetchQuestsStatus;

export const getQuestInfo = (state: State): QuestInfo | null => state[NameSpace.Quest].questInfo;

export const getQuestInfoFetchStatus = (state: State): FetchStatus => state[NameSpace.Quest].fetchQuestInfoStatus;

export const selectQuestInfoStatus = createSelector(
  [getQuestInfoFetchStatus],
  (status) => ({
    isLoading: [FetchStatus.Idle, FetchStatus.Pending].includes(status),
    isError: status === FetchStatus.Error,
    isSuccess: status === FetchStatus.Success
  })
);
