import { FetchStatus, NameSpace } from '../../const';
import { QuestInfo, QuestItem } from '../../types/quest';
import { State } from '../../types/state';

export const getQuests = (state: State): QuestItem[] => state[NameSpace.Quest].quests;

export const getQuestsFetchStatus = (state: State): FetchStatus => state[NameSpace.Quest].fetchQuestsStatus;

export const getQuestInfo = (state: State): QuestInfo | null => state[NameSpace.Quest].questInfo;

export const getQuestInfoFetchStatus = (state: State): FetchStatus => state[NameSpace.Quest].fetchQuestInfoStatus;
